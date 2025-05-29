"use strict";
const { Model } = require("sequelize");
const db = require(".");
import { User } from "./user";

class Location extends Model {
  static associate(models) {
    // define association here
    // Location.hasOne(models.User, { foreignKey: 'user_id', targetKey: 'id',  as: 'user' })
    Location.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "user",
    });
    Location.hasMany(models.Charger, {
      foreignKey: "location_id",
      as: "charger",
    });
  }

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
}

const initSource = (sequelize, DataTypes) => {
  Location.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      location_name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Location",
    }
  );
  return Location;
};

module.exports = {
  initSource: initSource,
  Location: Location,
};
