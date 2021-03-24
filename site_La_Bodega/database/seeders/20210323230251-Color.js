'use strict';
const colores = ['Rojo','Blanco','Violeta','Rosado','Azul','Amarillo']
const colors = []
colores.forEach(item => {
  let color = {
    name: item,
    createdAt: new Date,
    updatedAt: new Date
  }
  colors.push(color)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('colors',colors, {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('colors', null, {});

  }
};
