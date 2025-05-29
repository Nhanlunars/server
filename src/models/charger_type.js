"use strict";
const { Model } = require("sequelize");
import { Charger } from "./charger";
class Charger_type extends Model {
  static associate(models) {
    Charger_type.hasMany(models.Reservation, {
      foreignKey: "type_id",
    });
    Charger_type.belongsTo(Charger, {
      foreignKey: "charger_id" /*, targetKey: 'id'*/,
      as: "charger",
    });
    Charger_type.hasMany(models.Usege_history, { foreignKey: "type_id" });
    Charger_type.hasMany(models.Feedback, { foreignKey: "type_id" });
    Charger_type.hasMany(models.User_device, { foreignKey: "type_id" });
    Charger_type.hasMany(models.Maintenance, { foreignKey: "type_id" });
  }
}

const initSource = (sequelize, DataTypes) => {
  Charger_type.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      charger_id: DataTypes.INTEGER,
      type_name: DataTypes.STRING,
      describe: DataTypes.STRING,
      default_price: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Charger_type",
    }
  );
  return Charger_type;
};
module.exports = {
  initSource: initSource,
  Charger_type: Charger_type,
};
