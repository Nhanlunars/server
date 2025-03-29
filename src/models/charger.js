'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Charger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Charger.belongsTo(models.User, { foreignKey: 'user_id', as: 'useData' })
      Charger.belongsTo(models.Location, { foreignKey: 'location_id', targetKey: 'location_name', as: 'localData' })
      Charger.hasMany(models.Reservation, { foreignKey: 'charger_id', as: 'chargerData' })
      Charger.hasMany(models.Feedback, { foreignKey: 'charger_id', as: 'chargerData' })
      Charger.hasMany(models.Usege_histories, { foreignKey: 'charger_id', as: 'chargerData' })
      Charger.hasMany(models.Maintenance_log, { foreignKey: 'charger_id', as: 'chargerData' })

    }
  };
  Charger.init({
    secret_id: DataTypes.STRING,
    charger_name: DataTypes.STRING,
    model: DataTypes.STRING,
    capacity: DataTypes.STRING,
    status: DataTypes.STRING,
    installation_date: DataTypes.DATE,
    last_maintence_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Charger',
  });
  return Charger;
};