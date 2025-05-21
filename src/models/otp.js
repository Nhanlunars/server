'use strict';
const { Model } = require('sequelize');
const db = require('.');
import { User } from './user';

class OTP extends Model {
  static associate(models) {
    // define association here
    OTP.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'user' });
  }
}

const initSource = (sequelize, DataTypes) => {
  OTP.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      code: DataTypes.STRING,
      expiry_date: DataTypes.DATE,
      is_used: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'OTP',
    },
  );
  return OTP;
};

module.exports = {
  initSource: initSource,
  OTP: OTP,
};
