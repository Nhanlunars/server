"use strict";
const { Model } = require("sequelize");
import { User } from "./user";
import { Charger } from "./charger";
import { Charger_type } from "./charger_type";
class User_device extends Model {
  static associate(models) {
    // define association here
    User_device.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "user",
    });
    User_device.belongsTo(Charger, {
      foreignKey: "charger_id",
      targetKey: "id",
      as: "charger",
    });
    User_device.belongsTo(Charger_type, {
      foreignKey: "type_id",
      targetKey: "id",
      as: "type",
    });
  }
}

const initSource = (sequelize, DataTypes) => {
  User_device.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      charger_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      fcm_token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_device",
    }
  );
  return User_device;
};
module.exports = {
  initSource: initSource,
  User_device: User_device,
};
