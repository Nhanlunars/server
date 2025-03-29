'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Password_reset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Password_reset.belongsTo(models.User, { foreignKey: 'user_id', as: 'userData' })
     
    }
  };
  Password_reset.init({
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiry_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Password_reset',
  });
  return Password_reset;
};