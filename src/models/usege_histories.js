'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usege_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usege_histories .belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
      Usege_histories .belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
      
    }
  };
  Usege_histories .init({
    user_id : DataTypes.INTEGER,
    charger_id: DataTypes.INTEGER,
    type_id : DataTypes.INTEGER,
    start_time : DataTypes.DATE,
    end_time : DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Usege_histories ',
  });
  return Usege_histories ;
};