'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Scores', [{
        name: 'John Doe',
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jane Doe',
        score: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Jenny',
        score: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Viren',
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Doug',
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Kyla',
        score: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

  },

  down: function (queryInterface, Sequelize) {

      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Scores', null, {});
  }
};
