// setup code to connect node to mysql and export
var mysql = require('mysql');
var Sequelize = require('sequelize');

var connection;

if (process.env.JAWSDB_URL) {
	connection = new Sequelize(process.env.JAWSDB_URL);
} else {
	connection = new Sequelize({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'trivia_db'
	});
};

module.exports = connection;