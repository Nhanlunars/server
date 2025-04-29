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
      //Reservation.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id',  as: 'userReservation' })
      //Reservation.belongsTo(models.Charger, { foreignKey: 'charger_id',targetKey: 'id',  as: 'chargerReservation' })
      //Reservation.belongsTo(models.Charger_type, { foreignKey: 'type_id',targetKey: 'id', as : 'typeResaervation' })
    }
  };
  Reservation.init({
    user_id: DataTypes.INTEGER,
    charger_id : DataTypes.INTEGER,
    type_id : DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time : DataTypes.DATE,
    note : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation ;
};