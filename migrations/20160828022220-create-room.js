'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_num: {
        type: Sequelize.INTEGER
      },
      player1: {
        type: Sequelize.STRING
      },
      player1Score: {
        type: Sequelize.INTEGER
      },
      player2: {
        type: Sequelize.STRING
      },
      player2Score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Rooms');
  }
};