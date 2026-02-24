"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tasks", [
      {
        description: "Setup PostgreSQL database",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Create Task model",
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Implement CRUD APIs",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
