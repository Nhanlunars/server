'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OTP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //OTP.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id', as: 'userOTP' })
      
    }
  };
  OTP.init({
    user_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    expiry_date: DataTypes.DATE,
    is_used: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'OTP',
  });
  return OTP;
};