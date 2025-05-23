"use strict";
const { Model } = require("sequelize");
const db = require(".");
import { User } from "./user";
import { Charger } from "./charger";
import { Charger_type } from "./charger_type";

class Feedback extends Model {
  static associate(models) {
    Feedback.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "user",
    });
    Feedback.belongsTo(Charger, {
      foreignKey: "charger_id",
      targetKey: "id",
      as: "charger",
    });
    Feedback.belongsTo(Charger_type, {
      foreignKey: "type_id",
      targetKey: "id",
      as: "type",
    });
  }
}

const initSource = (sequelize, DataTypes) => {
  Feedback.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      charger_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      rating: DataTypes.STRING,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Feedback",
    }
  );
  return Feedback;
};

module.exports = {
  initSource: initSource,
  Feedback: Feedback,
};
