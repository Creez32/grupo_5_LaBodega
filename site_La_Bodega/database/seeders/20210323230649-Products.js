'use strict';
let faker = require('faker')
let {getWines} = require('../../data/products')
const productos = getWines();
let products = []

productos.forEach(producto => {
  let product = {
    name:producto.name,
    price:producto.price_unit,
    priceBox:producto.price_box,
    detail:producto.detail,
    year:producto.year,
    time:producto.time,
    imagen:producto.img,
    colorId:faker.random.number({
      min:1,
      max:6
    }),
    categoryId:faker.random.number({
      min:1,
      max:3
    }),
    createdAt: new Date,
    updatedAt: new Date
  }
  products.push(product)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('products',products, {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('products', null, {});

  }
};
