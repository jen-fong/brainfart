'use strict';
module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define('Room', {
    room_num: DataTypes.INTEGER,
    player1: DataTypes.STRING,
    player1Score: DataTypes.INTEGER,
    player2: DataTypes.STRING,
    player2Score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Room;
};