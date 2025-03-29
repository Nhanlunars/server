'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
      User.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
      User.hasOne(models.Owner_charger_info, { foreignKey: 'user_id' })
      User.hasMany(models.Charger, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.Reservation, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.Notification, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.Usege_histories, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.User_device, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.Password_reset, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.Feedback, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.User_ban_history, { foreignKey: 'user_id', as: 'userData' })
      User.hasMany(models.OTP, { foreignKey: 'user_id', as: 'userData' })

    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    roleId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};