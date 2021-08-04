// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },
    product_name: {
    type: DataTypes.VARCHAR,
    notNull: true,
    },
    price: {
    type: DataTypes.DECIMAL,
    notNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    category_id: {
      //ask about how to set up category foreign key in this situation
      foreignKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
