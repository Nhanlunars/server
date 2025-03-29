'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner_charger_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Owner_charger_info.belongsTo(models.User, { foreignKey: 'user_id', as: 'userData' })
      
    }
  };
  Owner_charger_info.init({
    user_id: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    account_name: DataTypes.STRING,
    picture: DataTypes.BLOB('long'),
  }, {
    sequelize,
    modelName: 'Owner_charger_info',
  });
  return Owner_charger_info;
};