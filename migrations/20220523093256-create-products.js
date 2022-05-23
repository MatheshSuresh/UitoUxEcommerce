'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productid:{
        type: Sequelize.UUID
      },
      productname: {
        type: Sequelize.STRING
      },
      shortdesc: {
        type: Sequelize.STRING
      },
      fulldesc: {
        type: Sequelize.STRING
      },
      maxprice: {
        type: Sequelize.INTEGER
      },
      saleprice: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      featured: {
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};