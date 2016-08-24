var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var gameRoute = require('./controllers/game_controller');
var socketController = require('./controllers/socket');
var models = require('./models');

//sync models from sequelize
models.sequelize.sync().then(function() {
	console.log('successfully synced model!');
});
// create express app and set it to use handlebars
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(__dirname + '/public'));

gameRoute(app);

io.on('connection', function (socket) {
	socketController(socket)	
});

server.listen(PORT, function() {
	console.log('connected on port ' + PORT);
});