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
      
      //Charger.hasOne(models.User_device, { foreignKey: 'charger_id', as: 'chargerDevice' })    
      //Charger.hasMany(models.Maintenance_log, { foreignKey: 'charger_id', as: 'chargerLog' })
      //Charger.hasMany(models.Reservation, { foreignKey: 'charger_id', as: 'chargerReservation' })
      //Charger.hasMany(models.Feedback, { foreignKey: 'charger_id', as: 'chargerFeedback' })
      //Charger.hasMany(models.Usege_history, { foreignKey: 'charger_id', as: 'chargerHistory' })
      //Charger.belongsTo(models.Location, { foreignKey: 'location_id', targetKey: 'id', as: 'locationCharger' })
    }
  };
  Charger.init({
    charger_name: DataTypes.STRING,
    capacity: DataTypes.STRING,
    installation_date: DataTypes.DATE,
    last_maintence_date: DataTypes.DATE,
    location_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Charger',
  });
  return Charger;
};