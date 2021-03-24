'use strict';
const categorias = ['Tinto','Blanco','Espumante']
const categories = []
categorias.forEach(categoria => {
  let categorie = {
    variedad: categoria,
    createdAt: new Date,
    updatedAt: new Date
  }
  categories.push(categorie)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('categories',categories, {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('categories', null, {});

  }
};
