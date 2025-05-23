"use strict";
const { Model } = require("sequelize");
const db = require(".");
import { User } from "./user";
import { Charger } from "./charger";
import { Charger_type } from "./charger_type";

class Notification extends Model {
  static associate(models) {
    // define association here
    Notification.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "user",
    });
    Notification.belongsTo(Charger, {
      foreignKey: "charger_id",
      targetKey: "id",
      as: "charger",
    });
    Notification.belongsTo(Charger_type, {
      foreignKey: "type_id",
      targetKey: "id",
      as: "type",
    });
  }
}

const initSource = (sequelize, DataTypes) => {
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      charger_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      message: DataTypes.STRING,
      is_read: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};

module.exports = {
  initSource: initSource,
  Notification: Notification,
};
