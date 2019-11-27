'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('users', [{
        userName: 'nchapelle',
        firstName: "Nolan",
        lastName: "Chapelle",
        password: "test",
        email: "nchapelle89@gmail.com",
        phone: "8563325870",
        zip: "90210",
        createdAt: new Date(),
        updatedAt: new Date()
    
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('users', null, {});
    
  }
};
