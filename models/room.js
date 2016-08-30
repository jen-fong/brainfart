'use strict';
module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define('Room', {
    room_num: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Room.hasMany(models.Player);
      }
    }
  });
  return Room;
};