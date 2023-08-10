'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User, { foreignKey: 'authorId' })
      Item.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Item.hasMany(models.Ingredient, { foreignKey: 'itemId' })
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Product name is required" },
        notEmpty: { msg: "Product name is required" }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Description is required" },
        notEmpty: { msg: "Description is required" }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Price is required" },
        notEmpty: { msg: "Price is required" },
        min: {
          args: 10000,
          msg: "Minimum price is 10.000"
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Image Url is required" },
        notEmpty: { msg: "Image Url is required" }
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    slug: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};