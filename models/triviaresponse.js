'use strict';
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD:models/triviachoice.js
  var triviaChoice = sequelize.define('triviaChoice', {
    choice: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
=======
  var triviaResponse = sequelize.define('triviaResponse', {
    choice: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
>>>>>>> jennysocketbranch:models/triviaresponse.js
    }
  }, {
    classMethods: {
      associate: function(models) {
        triviaResponse.belongsTo(models.triviaQuestion)
        // associations can be defined here
      }
    }
  });
  return triviaResponse;
};