'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Location.hasMany(models.Charger, { foreignKey: 'location_id', as: 'locationCharger' })
      //Location.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id', as: 'userLocation' })
    }
  };
  Location.init({
    location_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    district : DataTypes.STRING,
    ward : DataTypes.STRING,
    lat : DataTypes.FLOAT,
    lng : DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location ; 
};