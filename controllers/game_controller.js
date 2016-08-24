var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Score = require('../models').Score;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var gameRoute = function (app) {

	app.post('/game/score', function (req, res) {
		Score.create(req.body).then(function (data) {
				
			})
		});

	app.get('/', function (request, response) {
		
			response.render('index')
		
	});


};

module.exports = gameRoute;