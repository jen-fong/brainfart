'use strict';
module.exports = function(sequelize, DataTypes) {
  var triviaChoice = sequelize.define('triviaChoice', {
    choice: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
         triviaChoice.belongsTo(models.triviaQuestion)
        // associations can be defined here
      }
    }
  });
  return triviaChoice;
};