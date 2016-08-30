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

	var allBoxes = [
			'#testbuttonA1', '#testbuttonA2', '#testbuttonA3', '#testbuttonA4', '#testbuttonA5', 
			'#testbuttonB1', '#testbuttonB2', '#testbuttonB3', '#testbuttonB4', '#testbuttonB5',
			'#testbuttonC1', '#testbuttonC2', '#testbuttonC3', '#testbuttonC4', '#testbuttonC5',
			'#testbuttonD1', '#testbuttonD2', '#testbuttonD3', '#testbuttonD4', '#testbuttonD5'
		];
	$('#game_lives').html(lives);
	$('.score_number').html(score);

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
	var socket = io.connect('http://localhost:3000');
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
	socket.on('roomDoesNotExist', function (data) {
		console.log(data)
		$('#gameRooms').html('<h2>' + data.message + '</h2>');
	});
	socket.on('gameOver', function (data) {
		displayFinal(data);
	});
	socket.on('addedRoom', function (data) {
		addRoomToList(data);
	})

	$('#showTheRooms').on('click', function () {
		socket.emit('displayRooms', { messsage: 'ready for rooms'});
	});

	function gameInit(data) {
		gameId = data.gameId;
		mySocketId = data.mySocketId;
		role = 'player1';
		numOfPlayers = 1;
		console.log(gameId, role);
		$('#welcome').html('<h2>Welcome Player 1</h2>');
	}

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
		$('#displayRoom').html(roomDiv);
		
	}
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
	$('#test').on('click', function(e) {
		e.preventDefault()
		var name = $('#name').val();
		var addScore = {
			name: $('#name').val(),
			score: parseInt($('#score').val())
		}
		console.log(addScore);
		socket.emit('createRoom', addScore);

		// $.post('/game/score', addScore).done(function (response) {
			
		// 	console.log(response);

		// })
	})
	$('#displayRoom').on('click', 'button', function(e) {
		e.preventDefault();
		var room = $(this).attr('value');
		console.log(room)
		role = 'player2'
		numOfPlayers = 2;
		console.log(role)
		updateNumOfPlayers(room);
		$('#room').val('');
		$('#welcome').html('<h2>Welcome Player 2</h2>');
	})

	function updateNumOfPlayers (room) {
		if (numOfPlayers === 2) {
			socket.emit('player2Connected', {playerRoom: room});
			$('#testroom').hide();
		}
	}
	$('.question').on('click', function () {
		alert('test')
	})
	function initQuestions(data) {
		gameStarted = true;
		console.log(data.question, data.question.answer)
		theQuestion = data.question;
		theAnswer = data.question.answer;
		questionData = data;
		$('#choices').html('');
		console.log(data)
		// console.log(theQuestion);
		// send questions to the boxes
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



$('.trivBox').on('click', function() {
	if (!gameStarted) {
		$(this).off('click');
	} else {
		clicked_X = $(this).data('x');
		clicked_Y = $(this).data('y');
		var clickedBomb = false;
		var surroundingBombs = 0;

		for (var i = 0; i < bombs.length; i++) {
			if (clicked_X === $(bombs[i]).data('x') && clicked_Y === $(bombs[i]).data('y')) {
				clickedBomb = true;
				$(this).empty().removeClass().append('<img src="assets/images/skull.gif">');
				laugh.play();
				bombBox();
			}
		}
		if (!clickedBomb) {
			console.log(theQuestion, 'test');
			triviaBox();
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
		// bombCheck();
      $(this).empty().removeClass().addClass('numberBox').append(surroundingBombs);
		$(this).off('click');
	}
}


});

	function triviaBox() {
		$("#questionModal").modal({backdrop: 'static', keyboard: false});	
	}

$('#choices').on('click', 'button', function () {
	console.log(questionData)
	var userAnswer = $(this).val();
	console.log(userAnswer);
	questionData.player = role;
	questionData.x = clicked_X;
	questionData.y = clicked_Y;
	questionData.lives = lives;
	if (userAnswer === questionData.question.answer) {
		score++;
		console.log('correct!');
		$('.score_number').html(score);
		questionData.score = score;
		socket.emit('answeredCorrectly', questionData);
	} else {
		console.log('wrong', lives);
		lives--;
		$('#game_lives').html(lives);
		if (lives === 0) {
			$('#game_lives').html('0');
			socket.emit('gameOver', questionData);
		} else {
			socket.emit('answeredWrong', questionData);
		}
	}
		$(this).off('click');
})



function displayFinal(data) {
	var gameFinishedMsg = data.message + " Your score is " + score + ". Come and play again!";
	$('#winner').html(gameFinishedMsg);
	$('#scoreModal').modal('show');
}
})