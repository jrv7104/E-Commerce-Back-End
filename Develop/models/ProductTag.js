const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      notNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    //ask for foreign key help
    fk_product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true (Product_id),
  },
    fk_tag_id: {
      type: DataTypes.INTEGER,
      foreignKey: true (Tag_id),
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
