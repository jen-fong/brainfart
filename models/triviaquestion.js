'use strict';
module.exports = function(sequelize, DataTypes) {
  var triviaQuestion = sequelize.define('triviaQuestion', {
    question: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        triviaQuestion.belongsTo(models.triviaChoice)
        // associations can be defined here
      }
    }
  });
  return triviaQuestion;
};