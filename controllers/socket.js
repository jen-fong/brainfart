var models = require('../models');
var gameController = require('./game_controller');
var io;
var gameSocket;
var gameRoomId;
// var room;
var numOfPlayers;
var questionsArray = [];
function randomQuestion (array) {
	var theRandomQuestion = array[Math.floor(Math.random() * array.length)];
	return theRandomQuestion;
}
var sendQuestion;

// sio is the socket io library
// client is the socket object from connected client
var testSocket = function (sio, client) {
	gameSocket = client;
	io = sio;
	gameSocket.on('displayRooms', showRooms);
	gameSocket.on('createRoom', createRoom);
	gameSocket.on('player2Connected', playerJoin);
	gameSocket.on('countdownFinished', startGame);
	gameSocket.on('answeredCorrectly', increaseScore);
	gameSocket.on('answeredWrong', decreaseLives);
	gameSocket.on('gameOver', gameOver);
	gameSocket.on('disconnect', removeRoom);
}

module.exports = testSocket;

// function to display all the available rooms to the users
// a room is available if there is one player in there (need to work on this)
// checks for all rooms that is set to true
function showRooms() {
	var roomThis = this;
	models.Room.findAll({
		where: {
			status: true
		}
	}).then(function (availableRooms) {
		var roomArray = [];
		for (var i = 0; i < availableRooms.length; i++) {
			console.log(availableRooms[i].room_num);
			roomArray.push(availableRooms[i].room_num);
		}
		roomThis.emit('showAllRooms', roomArray);
	})
}

// user clicks create room
// randomizes a random room number and enter the user in it
// adds room into rooms table in db
// data emitted back to client is room # and their socket id
function createRoom () {
	console.log('client connected');
	gameRoomId = ( Math.random() * 100000 ) | 0;
	numOfPlayers = 1; // this part is not needed, need to put on client side
	player1SocketId = this.id;
	this.emit('newGameCreated', { gameId: gameRoomId, socketId: this.id})
	console.log(this.id)
	this.join(gameRoomId.toString());
	models.Room.create({
		room_num: gameRoomId,
		status: true
	}).then(function(room) {
		console.log('created room');
		// will need to insert this onto the page on connection
		var roomNumber = room;
		roomNumber.createPlayer({
			player_num: 'player1',
			socketId: player1SocketId,
			lives: 3,
			score: 0
		})

	}).then(function (player) { console.log(player)})
}

// grabs all the questions from db and places into an array
// may change this part to get a random number between 1 and 36 to query the db for a question
// need to make it not repeat numbers
// function is called when there are two users in the room
// will return the same first question to both users
function getQuestionFromDb () {
	models.triviaQuestion.findAll({
		limit: 36
	}).then(function (questions) {
		questions.forEach(function (questions) {
			questionsArray.push({
				question: questions.question,
				id: questions.id
			});
		})
		console.log(questionsArray);
		firstQuestion();
	})
}

// once question is grabbed from the db, will get all the choices from the choices table
// choices all correspond to the question id. The one that is true will be the correct answer
// assigns the true choice as the answer
function firstQuestion () {
	sendQuestion = randomQuestion(questionsArray);
	console.log(sendQuestion);
	models.triviaResponse.findAll({
		where: {
			triviaQuestionId: sendQuestion.id
		}
	}).then(function (choices) {
		var questionChoices = [];
		for (var i = 0; i < choices.length; i++) {
			questionChoices.push(choices[i].choice);
			if (choices[i].status) {
				sendQuestion.answer = choices[i].choice;
			}
		}
		sendQuestion.choices = questionChoices;
	})
}

// second user clicks join room
function playerJoin(data) {
	console.log('player 2 connected', data);
	var room = gameSocket.adapter.rooms[data.playerRoom];
	numOfPlayers = 2; // probably don't need this
	console.log(room);
	// reference to the socket io object
	var playerSocket = this;
	// attach socket id to the data obj
	data.playerSocketId = playerSocket.id;
	player2SocketId = this.id;
	// if the room exists, join the room as player 2
	if(room != undefined) {
		getQuestionFromDb();
		console.log('room exists', playerSocket.id, data.playerRoom);
		playerSocket.join(data.playerRoom);
		//update the room table with the player info
		models.Room.findAll({
			where:{
				room_num: data.playerRoom
			}
		}).then(function (room) {
			console.log(room[0], 'testing 2nd room');
			addPlayer2 = room[0];
			addPlayer2.createPlayer({
				player_num: 'player2',
				socketId: player2SocketId,
				lives: 3,
				score: 0
			}).then(function (player) {
				console.log('successfully added player 2');
				// tells clients that the game is ready
				io.sockets.in(data.playerRoom).emit('alertPlayers', data);
			})
			
		})

	} else {
		// room should exist only because we are displaying the rooms that are available from db
		// so if else statement not really needed
		 console.log('room does not exist', data);
		 var roomError = "Room does not exist";
		 this.emit('roomDoesNotExist', { message: roomError });
	}
}

// countdown has finished
// sends the first question to the clients
function startGame(data) {
	console.log('success', data);
	var socketThis = this;
	socketThis.emit('sendQuestions', { question: sendQuestion, room: data});
}

// need to remove these arrays when I change game design
	var player1Questions = [];
	var player2Questions = [];

// user has answered question
// client has sent the response back
// data contains the question, question id, answer, room, and user socket id
function nextQuestion (nextQuestionThis, data) {
	console.log(data.question.id);
	// I was trying to track the questions each user already received
	if (data.player === 'player1') {
		player1Questions.push({id: nextQuestionThis.id, questionId: data.question.id});
		// console.log(player1Questions);
	} else if (data.player === 'player2') {
		player2Questions.push({id: nextQuestionThis.id, questionId: data.question.id});
		console.log(player2Questions);
	}

	sendQuestion = randomQuestion(questionsArray);
	models.triviaResponse.findAll({
		where: {
			triviaQuestionId: sendQuestion.id
		}
	}).then(function (choices) {
		var questionChoices = [];
		for (var i = 0; i < choices.length; i++) {
			questionChoices.push(choices[i].choice);
			if (choices[i].status) {
				sendQuestion.answer = choices[i].choice;
			}
		}
		sendQuestion.choices = questionChoices;
		nextQuestionThis.emit('sendQuestions', { question:sendQuestion, room: data.room});
	})
	

	// sendQuestion = randomQuestion(questionsArray);
	// console.log(sendQuestion)
	// for (var i = 0; i < player1Questions.length; i++) {
	// 	if (sendQuestion.id === player1Questions[i].id) {
	// 		sendQuestion = randomQuestion(questionsArray);
	// 	} else {
	// 		models.triviaResponse.findAll({
	// 			where: {
	// 				triviaQuestionId: sendQuestion.id
	// 			}
	// 		}).then(function (choices) {
	// 			var questionChoices = [];
	// 			for (var i = 0; i < choices.length; i++) {
	// 				questionChoices.push(choices[i].choice);
	// 				if (choices[i].status) {
	// 					sendQuestion.answer = choices[i].choice;
	// 				}
	// 			}
	// 			sendQuestion.choices = questionChoices;
				
	// 			console.log(sendQuestion);
	// 		})
	// 	}
	// }

}

// user selected answer, client determines whether the answer is correct or not
// we had sent the question, question id, and the answer in the data every time we send a question
// client will determine whether it is the right or wrong answer and emit the proper response
// if client sees answer is correct, will increase the score and update the database
function increaseScore (data) {
	// need to keep reference to socket
	var passThis = this;
	console.log('testing room and player score update', data.room.playerRoom);
		models.Room.findAll({
			where: {
				room_num: data.room.playerRoom
			}
		}).then(function (room) {
			models.Player.update({
				score: data.score
			}, {
				where: {
					roomId: room[0].id,
					player_num: data.player
				}
			}).then(function (player) {
				// once database is updatedd, will call function to get another question
				nextQuestion(passThis, data);
			})
		})
	// var nextQuestionData = {
	// 	question: sendQuestion,
	// 	room: data.room
	// };
}

// user clicked choice and client determined it was wrong
// client emits the response to decrease lives of the user
// updates the database with the numb of lives and then calls the next question
function decreaseLives(data) {
	// console.log(data);
	var passThis = this;
	if (data.lives === 0) {
		gameOver(data);
	}
	models.Room.findAll({
		where: {
			room_num: data.room.playerRoom
		}
	}).then(function (room) {
		models.Player.update({
			lives: data.lives
		}, {
			where: {
				roomId: room[0].id,
				player_num: data.player
			}
		}).then(function (player) {
			nextQuestion(passThis, data);
		})
	})
	
}

// Game over, client determines num of lives has hit 0
// alerts users who won the game by comparing the points of each user
// I need to fix this, if user has more points but no lives, they need to lose
function gameOver (data) {
	models.Room.findAll({
		where: {
			room_num: data.room.playerRoom
		}
	}).then(function (room) {
		models.Player.findAll({
			where: {
				roomId: room[0].id
			}
		}).then(function (player) {
			if (player[0].score > player[1].score) {
				io.sockets.in(data.room.playerRoom).emit('gameOver', {message: 'Player 1 Wins!'});
			} else {
				io.sockets.in(data.room.playerRoom).emit('gameOver', {message: 'Player 2 Wins!'});
			}
		})
	})
}

// detects disconnect events from the client
// if there are no more users in a room, will change the room status to being false
// room will not display to other users
// need to fix this function so it checks for socket connections instead of numOfPlayers
function removeRoom(data) {
	numOfPlayers--; // change to count socket connections instead
	console.log('client disconnected', this.id);
	if (numOfPlayers === 0) {
		models.Player.findAll({
			where: {
				socketId: this.id
			}
		}).then(function (playerRoom) {
			console.log(playerRoom[0].RoomId, 'testing disconnect');
			models.Room.update({
				status: false
			},{
				where: {
					id: playerRoom[0].RoomId
				}
			}).then(function (room) {
				console.log('success changed to false');
			})

		})
	} else {
		io.sockets.to(gameRoomId).emit('waitingForPlayer', { message: 'Waiting for player to join' });
	}
	
}
// function displayScore () {
// 	models.Score.findAll({
// 		limit: 5,
// 		order:[['score', 'DESC']]
// 	}).then(function(scores) {
// 		scores.forEach(function (score) {
// 			socket.emit('score', score);
// 			// socket.broadcast.emit('score', score);
// 		})
// 	})
// 	socket.on('score', function (data) {
// 		models.Score.findAll({
// 		limit: 5,
// 		order:[['score', 'DESC']]
// 	}).then(function(scores) {
// 		scores.forEach(function (score) {
// 			socket.emit('score', score);
// 			socket.broadcast.emit('score', score);
// 		})
// 	})
// 	})
// }

/* what do we need to broadcast
1. any changes that happen to the board
 - score
 2. find something to broadcast
*/

/* what do we need to emit
1. changes to clicked boxes on opponents side
 - includes whatever bombs you put there
 - 
 */