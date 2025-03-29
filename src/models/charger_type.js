'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Charger_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Charger_type.hasMany(models.Usege_histories, { foreignKey: 'type_id', as: 'typeData' })
      Charger_type.hasMany(models.Reservation, { foreignKey: 'type_id', as: 'typeData' })

    }
  };
  Charger_type.init({
    type_name: DataTypes.STRING,
    default_duration: DataTypes.STRING,
    default_price: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Charger_type',
  });
  return Charger_type;
};