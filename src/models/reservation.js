'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User, { foreignKey: 'user_id',  as: 'userData' })
      Reservation.belongsTo(models.Charger, { foreignKey: 'gender',  as: 'chargerData' })
      Reservation.hasOne(models.Charger_type, { foreignKey: 'user_id', as : 'typeDate' })
      

    }
  };
  Reservation.init({
    user_id: DataTypes.INTEGER,
    charger_id : DataTypes.INTEGER,
    type_id : DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time : DataTypes.DATE,
    status : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Reservation ',
  });
  return Reservation ;
};