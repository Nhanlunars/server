'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_ban_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_ban_history.belongsTo(models.User, { foreignKey: 'user_id', as: 'userData' })
      
    }
  };
  User_ban_history.init({
    user_id: DataTypes.INTEGER,
    ban_count: DataTypes.INTEGER,
    cancellation_count : DataTypes.INTEGER,
    last_ban_start : DataTypes.DATE,
    last_ban_end : DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User_ban_history',
  });
  return User_ban_history;
};