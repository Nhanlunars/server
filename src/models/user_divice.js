'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_device.belongsTo(models.User, { foreignKey: 'user_id', as: 'userData' })
      
    }
  };
  User_device.init({
    user_id: DataTypes.INTEGER,
    fcm_token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User_device',
  });
  return User_device;
};