var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var gameRoute = require('./controllers/game_controller');
var models = require('./models');

//sync models from sequelize
models.sequelize.sync().then(function() {
	console.log('successfully synced model!');
});
// create express app and set it to use handlebars
var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use('/', gameRoute);

app.listen(PORT, function() {
	console.log('connected on port ' + PORT);
});