'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('stats', [{
      category: "Football",
      stat_name1: "Wins",
      stat_name2: "Losses",
      stat_name3: "Touchdowns",
      stat_name4: "Interceptions",
      stat_name5: "Sacks",
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

  },

  down: (queryInterface, Sequelize) => {
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete('stats', null, {});

  }
};
