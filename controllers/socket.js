var models = require('../models');
var gameController = require('./game_controller');
var io;
var gameSocket;
var gameRoomId;
var room;
var numOfPlayers;
var questionsArray = [];
function randomQuestion (array) {
	var theRandomQuestion = array[Math.floor(Math.random() * array.length)];
	return theRandomQuestion;
}
var sendQuestion;


var testSocket = function (sio, client) {
	gameSocket = client;
	io = sio;
	// gameSocket.on('displayRooms', showRooms);
	gameSocket.on('createRoom', createRoom);
	gameSocket.on('player2Connected', playerJoin);
	gameSocket.on('countdownFinished', startGame);
	gameSocket.on('answeredCorrectly', increaseScore);
	gameSocket.on('answeredWrong', moveToNextQuestion);
	gameSocket.on('disconnect', removeRoom);
}

module.exports = testSocket;
// function showRooms() {
// 	var rooms = gameSocket.adapter.rooms;
// 	console.log(rooms);

// 	if (rooms = undefined) {
// 		console.log('does not exist')
// 	}
// 	this.emit('showAllRooms', {allRooms: rooms });
// }
function createRoom () {
	console.log('client connected');
	gameRoomId = ( Math.random() * 100000 ) | 0;
	numOfPlayers = 1;
	player1SocketId = this.id;
	this.emit('newGameCreated', { gameId: gameRoomId, socketId: this.id})
	console.log(this.id)
	this.join(gameRoomId.toString());
	models.Room.create({
		room_num: gameRoomId,
		player1: player1SocketId,
		player1Score: 0
	}).then(function(room) {
		console.log('created room');
		// will need to insert this onto the page on connection
	})
}

function getQuestionFromDb () {
	models.triviaQuestion.findAll({
		limit: 25
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

function playerJoin(data) {
	console.log('player 2 connected', data);
	room = gameSocket.adapter.rooms[data.playerRoom];
	// may need to turn all rooms to string 
	numOfPlayers = 2;
	console.log(room);
	var playerSocket = this;
	// attach socket id to the data obj
	data.playerSocketId = playerSocket.id;
	player2SocketId = this.id;
	if(room != undefined) {
		getQuestionFromDb();
		console.log('room exists', playerSocket.id, data.playerRoom);
		playerSocket.join(data.playerRoom);
		io.sockets.in(data.playerRoom).emit('alertPlayers', data);
		models.Room.update({
			player2: player2SocketId,
			player2Score: 0
		}, {
			where:{
				room_num: data.playerRoom
			}
		})

	} else {
		 console.log('room does not exist', data);
		 var roomError = "Room does not exist";
		 this.emit('roomDoesNotExist', { message: roomError });
	}
}

function startGame(data) {
	console.log('success', data);
	var socketThis = this;
	socketThis.emit('sendQuestions', { question: sendQuestion, room: data});
}

function nextQuestion (nextQuestionThis, data) {
	var player1Questions = [];
	var player2Questions = [];
	console.log(data.question.id)
	if (data.player === 'player1') {
		player1Questions.push({id: nextQuestionThis.id, questionId: data.question.id});
		// console.log(player1Questions);
	} else if (data.player === 'player2') {
		player2Questions.push({id: nextQuestionThis.id, questionId: data.question.id});
		console.log(player2Questions);
	}
	sendQuestion = randomQuestion(questionsArray);
	for (var i = 0; i < player1Questions.length; i++) {
		if (sendQuestion.id === player1Questions[i].id) {
			sendQuestion = randomQuestion(questionsArray);
		} else {
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
				nextQuestionThis.emit('sendQuestions', { question:sendQuestion, room: data.room});
				console.log(sendQuestion);
			})
		}
	}
	
	
}

function increaseScore (data) {
	var passThis = this;
	if (data.player === 'player1') {
		models.Room.update({
			player1Score: data.score
		}, {
			where: {
				room_num: data.room.playerRoom
			}
		})
	} else if (data.player === 'player2') {
		models.Room.update({
			player2Score: data.score
		}, {
			where: {
				room_num: data.room.playerRoom
			}
		})
	}
	nextQuestion(passThis, data);
	// var nextQuestionData = {
	// 	question: sendQuestion,
	// 	room: data.room
	// };
}

function moveToNextQuestion(data) {
	// console.log(data);
	var passThis = this;
	nextQuestion(passThis, data);
}

function removeRoom(data) {
	numOfPlayers--;
	console.log('client disconnected', this.id);
	if (numOfPlayers === 0) {
		models.Room.destroy({
			where: {
				$or: [{
					player1: this.id
				}, {
					player2:this.id
				}]
			}
		}).then(function (room) {
			console.log('room destroyed');
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