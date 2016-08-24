'use strict';
module.exports = function(sequelize, DataTypes) {
  var gameQuestion = sequelize.define('gameQuestion', {
    question: DataTypes.TEXT,
    category: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    choice1: DataTypes.STRING,
    choice2: DataTypes.STRING,
    choice3: DataTypes.STRING,
    choice4: DataTypes.STRING,
    correct: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gameQuestion;
};