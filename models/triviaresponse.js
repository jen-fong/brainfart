'use strict';
module.exports = function(sequelize, DataTypes) {
  var triviaResponse = sequelize.define('triviaResponse', {
    choice: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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