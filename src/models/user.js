'use strict';
const { Model } = require('sequelize');

class User extends Model {
  static associate(models) {
    User.hasMany(models.Location, { foreignKey: 'user_id', as: 'location' });
    User.hasMany(models.Reservation, {
      foreignKey: 'user_id',
    });
    User.hasOne(models.Owner_charger_info, { foreignKey: 'user_id' });
    User.hasMany(models.Usege_history, { foreignKey: 'user_id' });
    User.hasMany(models.Feedback, { foreignKey: 'user_id' });
    User.hasMany(models.User_device, { foreignKey: 'user_id' });
    User.hasMany(models.Notification, { foreignKey: 'user_id' });
    User.hasMany(models.OTP, { foreignKey: 'user_id' });
  }
}

const initSource = (sequelize, DataTypes) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.BLOB('long'),
      roleId: DataTypes.STRING,
      ban: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users', // explicitly set the table name
      timestamps: true,
    },
  );
  return User;
};
module.exports = {
  initSource: initSource,
  User: User,
};
