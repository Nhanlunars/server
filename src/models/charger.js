"use strict";
const { Model } = require("sequelize");
import { Location } from "./location";
class Charger extends Model {
  static associate(models) {
    Charger.hasMany(models.Reservation, {
      foreignKey: "charger_id",
    });
    Charger.belongsTo(Location, {
      foreignKey: "location_id" /*, targetKey: 'id'*/,
      as: "location",
    });
    Charger.hasMany(models.Charger_type, {
      foreignKey: "charger_id",
    });
    Charger.hasMany(models.Usege_history, { foreignKey: "charger_id" });
    Charger.hasMany(models.Feedback, { foreignKey: "charger_id" });
    Charger.hasMany(models.User_device, { foreignKey: "charger_id" });
    Charger.hasMany(models.Maintenance, { foreignKey: "charger_id" });
  }
}
const initSource = (sequelize, DataTypes) => {
  Charger.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      charger_name: DataTypes.STRING,
      capacity: DataTypes.STRING,
      installation_date: DataTypes.DATE,
      last_maintence_date: DataTypes.DATE,
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Charger",
    }
  );
  return Charger;
};
module.exports = {
  initSource: initSource,
  Charger: Charger,
};
