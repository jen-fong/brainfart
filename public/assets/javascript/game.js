$(document).ready(function() {
	var role;
	var mySocketId;
	var questionData;
	var time = 10;
	var gameStarted = false;
	var theQuestion ="";
	var score = 0;
	var lives = 3;
	var clicked_Y;
	var clicked_X;
	var laugh = new Audio('assets/sounds/skullkid.mp3');


	var allBoxes = [
			'#testbuttonA1', '#testbuttonA2', '#testbuttonA3', '#testbuttonA4', '#testbuttonA5', 
			'#testbuttonB1', '#testbuttonB2', '#testbuttonB3', '#testbuttonB4', '#testbuttonB5',
			'#testbuttonC1', '#testbuttonC2', '#testbuttonC3', '#testbuttonC4', '#testbuttonC5',
			'#testbuttonD1', '#testbuttonD2', '#testbuttonD3', '#testbuttonD4', '#testbuttonD5'
		];
	$('#game_lives').html(lives);
	$('.score_number').html(score);

	// this is for the slide down when new game starts
	$('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
    // connects the client socket io to the server socket io
	var socket = io.connect();
	//test socket
	socket.on('showAllRooms', function (data) {
		showRooms(data);
	})
	socket.on('waitingForPlayer', function (data) {
		$('#gameRooms').html('<h2>' + data.message + '</h2>');
	})
	socket.on('newGameCreated', function(data) {
		gameInit(data)
	});
	socket.on('alertPlayers', function(data) {
		// alert(data.message)
		onStartCountdownTimer(data);
	});
	socket.on('sendQuestions', function(data) {
		initQuestions(data);
	});
	socket.on('gameOver', function (data) {
		displayFinal(data);
	});
	socket.on('addedRoom', function (data) {
		addRoomToList(data);
	})

	// start game button is clicked
	// asks server to send list of open rooms from database
	$('#showTheRooms').on('click', function () {
		socket.emit('displayRooms', { messsage: 'ready for rooms'});
	});

	// create room is clicked, new game room is initiated
	function gameInit(data) {
		// obtains the game room and user socket id from the data
		gameId = data.gameId;
		mySocketId = data.mySocketId;
		// assigns the role as player 1 *important for keeping track of players
		// and updating db
		role = 'player1';
		numOfPlayers = 1;
		console.log(gameId, role);
		$('#welcome').html('<h2>Welcome Player 1</h2>');
	}

	// receive all rooms in data from server and appends it to the available rooms list
	function showRooms (data) {
		console.log(data);
		var roomDiv = $('<div>', {
			class: 'oneRoom',
		});
		for (var i = 0; i < data.length; i++) {
			var joinButton = $('<button>', {
				id: 'testroom',
				type: 'button',
				text: 'Join Room',
				value: data[i]
			});
			var pRoom = $('<p>'); // lol p room
			pRoom.append(data[i], joinButton);
			roomDiv.append(pRoom);
		}
		$('#displayRoom').append(roomDiv);
		
	}

	// appends a new room that is added
	// need to fix this so there is not two functions for same thing
	function addRoomToList (data) {
		var roomDiv = $('<div>', {
			class: 'oneRoom',
		});
		var joinButton = $('<button>', {
			id: 'testroom',
			type: 'button',
			text: 'Join Room',
			value: data
		});
		var pRoom = $('<p>'); // lol p room
		pRoom.append(data, joinButton);
		roomDiv.append(pRoom);
		$('#displayRoom').append(roomDiv);
	}

	// socket.on('newGameCreated', function (data) {
	// 	console.log(data)
	// })
	// socket.on('score', function (data) {
	// 	if ($('.test').children().length === 10) {
	// 		$('.test').html('');
	// 	}
	// 	$('.test').append('<div>' + data.name + '</div><br>')
	// })

	// testing for leaderboard, not yet functional
	$('#createNewRoom').on('click', function(e) {
		e.preventDefault()
		socket.emit('createRoom', {message: "created room"});
	})

	// player 2 clicks joins an available room
	$('#displayRoom').on('click', 'button', function(e) {
		e.preventDefault();
		// grab the value of the room to be sent back to server
		var room = $(this).attr('value');
		console.log(room);
		// assigns player two to begin game
		role = 'player2';
		numOfPlayers = 2;
		console.log(role)
		updateNumOfPlayers(room);
		$('#room').val('');
		$('#welcome').html('<h2>Welcome Player 2</h2>');
	})

	// two players connected to one game room
	// will tell server that game is ready to start
	function updateNumOfPlayers (room) {
		if (numOfPlayers === 2) {
			socket.emit('player2Connected', {playerRoom: room});
			$('#testroom').hide();
		}
	}

	// was testing something
	$('.question').on('click', function () {
		alert('test')
	})

	// received question with answer and question id from server
	function initQuestions(data) {
		// change gameStarted to true so the question boxes can be clicked now
		gameStarted = true;
		console.log(data.question, data.question.answer);
		// assign the question and answer to variables so we can reuse it throughout
		theQuestion = data.question;
		theAnswer = data.question.answer;
		questionData = data;
		$('#choices').html('');
		console.log(data);
		// console.log(theQuestion);
		// send questions to the boxes and displays all the choices as buttons
		// need to add a timer in modal, too
		$('#questionDisplay').text(theQuestion.question);
		for (var i = 0; i < data.question.choices.length; i++) {
			// var buttonChoice = $('<button>', {
			// 	type: 'button',
			// 	name: 'choice',
			// 	class: 'submitChoice btn btn-default',
			// 	value: data.question.choices[i]
			// });
			// buttonChoice.text(data.question.choices[i]);
			var buttonChoice = '<button type="button" name="choice" class="submitChoice btn btn-default" value="' + data.question.choices[i] + '" data-dismiss="modal">' + data.question.choices[i] + '</button>';
			$('#choices').append(buttonChoice);
		}
	}

	// timer for game start, 10 secs
	function runTimer(data){
		timer = setInterval(function () {
			decreaseTime(data);
		}, 1000);
    };
    function decreaseTime(data){
    	time--;
    	$('#gameRooms').html('<h2>Get Ready! Time to begin: ' + time + '</h2>'); 
    	if (time === 0) {
    		clearInterval(timer);
    		$('#gameRooms').html('');
    		socket.emit('countdownFinished', data)
    	}
    };

	function onStartCountdownTimer (data) {
		console.log(data)
		runTimer(data);
	}


	var bombs = [];

	// Fisher-Yates Shuffle Algorithm:
	Array.prototype.shuffle = function() {
		var i = this.length, j, temp;
		while(--i > 0) {
			j = Math.floor(Math.random() * (i+1));
			temp = this[j];
			this[j] = this[i];
			this[i] = temp;
		}
		return this;
	}
	var shuffledBoxes = allBoxes.shuffle();


	// Chooses which boxes will be bombs:
	for (var i = 0; i < 5; i++) {
		bombs[i] = shuffledBoxes[i];
	}
	console.log("The bombs are: " + bombs);


	var surroundingBoxes = [
		[-1,-1],
		[0,-1],
		[1,-1],
		[-1,0],
		[1,0],
		[-1,1],
		[0,1],
		[1,1]
	];

	// player selects a box
	$('.trivBox').on('click', function() {
		// checks if game has started, if not, boxes will not be clickable
		if (!gameStarted) {
			$(this).off('click');
		} else {
			// we assigned the arbitrary values of x and y to each box to match a grid
			// grabs the x and y values of the clicked box
			clicked_X = $(this).data('x');
			clicked_Y = $(this).data('y');
			var clickedBomb = false;
			// if its a bomb, will show bomb laughing
			// need to update this to make it so clicking on a bomb will decrease time you have to answer question
			for (var i = 0; i < bombs.length; i++) {
				if (clicked_X === $(bombs[i]).data('x') && clicked_Y === $(bombs[i]).data('y')) {
					clickedBomb = true;
					$(this).empty().removeClass().append('<img src="assets/images/skull.gif">');
					laugh.play();
					bombBox();
				}
			}
			if (!clickedBomb) {
				var trivBoxThis = this;
				triviaBox();
				bombCheck(trivBoxThis);
				$(this).off('click');
			}
		}
	});

	// display question in modal after the box is selected
	// prevents user from clicking away from the modal
	// aka requires an answer
	function triviaBox() {
		$("#questionModal").modal({backdrop: 'static', keyboard: false});	
	}
	// minesweeper portion
	// counts the surrounding bombs and displays num of bombs in box
	function bombCheck(trivBoxThis) {
		var surroundingBombs = 0;
		for (var i = 0; i < surroundingBoxes.length; i++) {
			// var surroundingBox_X = ;
			// var surroundingBox_Y = ;
			if ((clicked_X + surroundingBoxes[i][0]) >= 0 && (clicked_X + surroundingBoxes[i][0]) <= 4 && 
				(clicked_Y + surroundingBoxes[i][1]) >= 0 && (clicked_Y + surroundingBoxes[i][1]) <= 3) {
				for (var j = 0; j < bombs.length; j++) {
					if ((clicked_X + surroundingBoxes[i][0]) === $(bombs[j]).data('x') && 
						(clicked_Y + surroundingBoxes[i][1]) === $(bombs[j]).data('y')) {
						surroundingBombs++;
					}
				}
			}
		}
		$(trivBoxThis).empty().removeClass().addClass('numberBox').append(surroundingBombs);
	}

	// user clicks on their answer
	$('#choices').on('click', 'button', function () {
		if(!document.getElementsByClassName('trivBox').length) {
			questionData.gameFinished = true;
		}
		var userAnswer = $(this).val();
		console.log(userAnswer);
		// assign role, x, y to the data object that will be sent back to the server
		// data will be used in server to update db
		questionData.player = role;
		questionData.x = clicked_X;
		questionData.y = clicked_Y;
		if (userAnswer === questionData.question.answer) {
			// increase score if answer was correct
			score++;
			console.log('correct!');
			$('.score_number').html(score);
			//attaches score and lives to data var and send all data back to server
			questionData.score = score;
			questionData.lives = lives;
			socket.emit('answeredCorrectly', questionData);
		} else {
			// decrease lives if answer was wrong
			lives--;
			$('#game_lives').html(lives);
			console.log('wrong', lives);
			//attaches score and lives to data var and send all data back to server
			questionData.score = score;
			questionData.lives = lives;
			socket.emit('answeredWrong', questionData);
		}
		// prevents user from clicking on same box
		$(this).off('click');
	})

	// displays the final msg to both players when one player loses or when one player wins
	function displayFinal(data) {
		var gameFinishedMsg = data.message + " Your score is " + score + ". Come and play again!";
		$('#winner').html(gameFinishedMsg);
		$('#scoreModal').modal('show');
		gameStarted = false;
	}
})