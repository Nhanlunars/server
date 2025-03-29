'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maintenance_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Maintenance_log.belongsTo(models.Charger, { foreignKey: 'charger_id', targetKey: 'charger_name', as: 'chargerData' })
     
    }
  };
  Maintenance_log.init({
    charger_id: DataTypes.INTEGER,
    maintenance_date: DataTypes.DATE,
    completion_date: DataTypes.DATE,
    maintenance_type: DataTypes.STRING,
    technician_name: DataTypes.STRING,
    maintenance_cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Maintenance_log',
  });
  return Maintenance_log;
};