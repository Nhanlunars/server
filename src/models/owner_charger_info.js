"use strict";
const { Model } = require("sequelize");
const db = require(".");
import { User } from "./user";
import { Charger } from "./charger";

class Owner_charger_info extends Model {
  static associate(models) {
    // define association here
    Owner_charger_info.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "user",
    });
  }
}

const initSource = (sequelize, DataTypes) => {
  Owner_charger_info.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      bank_name: DataTypes.STRING,
      account_number: DataTypes.STRING,
      account_name: DataTypes.STRING,
      picture: DataTypes.BLOB("long"),
    },
    {
      sequelize,
      modelName: "Owner_charger_info",
    }
  );
  return Owner_charger_info;
};

module.exports = {
  initSource: initSource,
  Owner_charger_info: Owner_charger_info,
};
