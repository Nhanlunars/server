"use strict";
const { Model } = require("sequelize");
// const db = require('.');

class Allcode extends Model {
  static associate(models) {}
}

const initSource = (sequelize, DataTypes) => {
  Allcode.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};

module.exports = {
  initSource: initSource,
  Allcode: Allcode,
};
