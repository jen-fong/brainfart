var models = require('../models');


var testSocket = function (socket) {
	models.Score.findAll({
	limit: 5,
	order:[['score', 'DESC']]
}).then(function(scores) {
	scores.forEach(function (score) {
		socket.emit('score', score);
		// socket.broadcast.emit('score', score);
	})
})
socket.on('score', function (data) {
	models.Score.findAll({
	limit: 5,
	order:[['score', 'DESC']]
}).then(function(scores) {
	scores.forEach(function (score) {
		socket.emit('score', score);
		socket.broadcast.emit('score', score);
	})
})
})
}

module.exports = testSocket;