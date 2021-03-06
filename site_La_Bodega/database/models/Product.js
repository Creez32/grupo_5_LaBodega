'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Color,{
        as:'color'
      }),
      Product.belongsTo(models.Category,{
        as:'category'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    priceBox: DataTypes.INTEGER,
    detail: DataTypes.STRING,
    variety: DataTypes.STRING,
    year: DataTypes.INTEGER,
    time: DataTypes.STRING,
    imagen: DataTypes.STRING,
    origin: DataTypes.STRING,
    colorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};