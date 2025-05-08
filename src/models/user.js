'use strict';
const {
  Model
} = require('sequelize');

class User extends Model {
  
  static associate(models) {
    // define association here
    //User.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
    //User.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
    User.hasMany(models.Location, { foreignKey: 'user_id', as: 'location' })
    User.hasMany(models.Reservation, {
      foreignKey: 'user_id'
    })
         // User.belongsTo(models.Reservation, { foreignKey: 'user_id', as: 'user' })

    User.hasOne(models.Owner_charger_info, { foreignKey: 'user_id' })
    //User.hasMany(models.Notification, { foreignKey: 'user_id', as: 'userNotification' })
    User.hasMany(models.Usege_history, { foreignKey: 'user_id'})
    User.hasMany(models.Feedback, { foreignKey: 'user_id' })
    User.hasMany(models.User_device, { foreignKey: 'user_id' })
    User.hasMany(models.Notification, { foreignKey: 'user_id' })
    User.hasMany(models.OTP, { foreignKey: 'user_id' })

    
    //User.hasMany(models.OTP, { foreignKey: 'user_id', as: 'userOTP' })

  }
};

const initSource = (sequelize, DataTypes) => {
  User.init({
    id: {
      type:  DataTypes.INTEGER,
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
    ban: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User
};
module.exports = {
  initSource: initSource,
User: User
} 

