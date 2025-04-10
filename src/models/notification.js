'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Notification.belongsTo(models.User, { foreignKey: 'user_id ',targetKey: 'id', as: 'userNotification'})
      
    }
  };
  Notification.init({
    user_id : DataTypes.INTEGER,
    title : DataTypes.STRING,
    message : DataTypes.STRING,
    is_read : DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification ;
};