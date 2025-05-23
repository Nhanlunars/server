"use strict";
const { Model } = require("sequelize");
const db = require(".");
import { User } from "./user";
import { Charger } from "./charger";
import { Charger_type } from "./charger_type";

class Reservation extends Model {
  static associate(models) {
    Reservation.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "user",
    });
    Reservation.belongsTo(Charger, {
      foreignKey: "charger_id",
      targetKey: "id",
      as: "charger",
    });
    Reservation.belongsTo(Charger_type, {
      foreignKey: "type_id",
      targetKey: "id",
      as: "type",
    });
  }
}

const initSource = (sequelize, DataTypes) => {
  Reservation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      charger_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reservation",
    }
  );
  return Reservation;
};

module.exports = {
  initSource: initSource,
  Reservation: Reservation,
};
