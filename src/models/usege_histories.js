'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usege_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Usege_history.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id',  as: 'userHistory' })
      //Usege_history.belongsTo(models.Charger, { foreignKey: 'charger_id',targetKey: 'id',  as: 'chargerHistory' })
      //Usege_history.belongsTo(models.Charger_type, { foreignKey: 'type_id',targetKey: 'id', as : 'typeHistory' })
    }
  };
  Usege_history .init({
    user_id : DataTypes.INTEGER,
    charger_id: DataTypes.INTEGER,
    type_id : DataTypes.INTEGER,
    start_time : DataTypes.DATE,
    end_time : DataTypes.DATE,
    number_start: DataTypes.FLOAT,
    number_end: DataTypes.FLOAT,
    cost: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Usege_history',
  });
  return Usege_history ;
};