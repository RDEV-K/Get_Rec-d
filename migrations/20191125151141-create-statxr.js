'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('statxrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stat1: {
        type: Sequelize.INTEGER
      },
      stat2: {
        type: Sequelize.INTEGER
      },
      stat3: {
        type: Sequelize.INTEGER
      },
      stat4: {
        type: Sequelize.INTEGER
      },
      stat5: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('statxrs');
  }
};