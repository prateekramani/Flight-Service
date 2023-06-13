'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.City, {
        foreignKey : cityId,
      }) // Airport belongs to City , on the basis of cityId (one airport belongs to one city)

      this.hasMany(models.Flight, {
        foreignKey : "arrivalAirportId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      }) 
      
      this.hasMany(models.Flight, {
        foreignKey : "departureAirportId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      })
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};