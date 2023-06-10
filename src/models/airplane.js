'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey : cityId,
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      }) // Airport belongs to City , on the basis of cityId (one airport belongs to one city)
    }
  }
  Airplane.init({
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    capacity:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        max: 200
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};