'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       User.hasMany(models.Charger, { foreignKey: 'location_id', as: 'locationData' })

    }
  };
  User.init({
    location_name : DataTypes.STRING,
    address : DataTypes.STRING,
    city: DataTypes.STRING,
    district : DataTypes.STRING,
    ward : DataTypes.STRING,
    lat : DataTypes.FLOAT,
    lng : DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Location ',
  });
  return Location ;
};