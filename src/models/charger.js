/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Charger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here
      
      //Charger.hasOne(models.User_device, { foreignKey: 'charger_id', as: 'chargerDevice' })    
      //Charger.hasMany(models.Maintenance_log, { foreignKey: 'charger_id', as: 'chargerLog' })
      //Charger.hasMany(models.Reservation, { foreignKey: 'charger_id', as: 'chargerReservation' })
      //Charger.hasMany(models.Feedback, { foreignKey: 'charger_id', as: 'chargerFeedback' })
      //Charger.hasMany(models.Usege_history, { foreignKey: 'charger_id', as: 'chargerHistory' })
      //Charger.belongsTo(models.Location, { foreignKey: 'location_id', targetKey: 'id', as: 'locationCharger' })
    }
  };
  Charger.init({
    charger_name: DataTypes.STRING,
    capacity: DataTypes.STRING,
    installation_date: DataTypes.DATE,
    last_maintence_date: DataTypes.DATE,
    location_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Charger',
  });
  return Charger;
};*/


'use strict';
const {
  Model
} = require('sequelize');

class Charger extends Model {
  
  static associate(models) {
    // define association here
    //User.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
    //User.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
    //User.hasMany(models.Location, { foreignKey: 'user_id', as: 'userLocation' })
    Charger.hasMany(models.Reservation, {
      foreignKey: 'charger_id'
    })
         // User.belongsTo(models.Reservation, { foreignKey: 'user_id', as: 'user' })

    //User.hasOne(models.Owner_charger_info, { foreignKey: 'user_id' })
    //User.hasMany(models.Notification, { foreignKey: 'user_id', as: 'userNotification' })
    //User.hasMany(models.Usege_histories, { foreignKey: 'user_id', as: 'userHistory' })
    //User.hasMany(models.Feedback, { foreignKey: 'user_id', as: 'userFeedback' })
    //User.hasMany(models.OTP, { foreignKey: 'user_id', as: 'userOTP' })

  }
};
const initSource = (sequelize, DataTypes) => {
  Charger.init({
    id: {
      type:  DataTypes.INTEGER,
      primaryKey: true,
    },
    charger_name: DataTypes.STRING,
    capacity: DataTypes.STRING,
    installation_date: DataTypes.DATE,
    last_maintence_date: DataTypes.DATE,
    location_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Charger',
  });
  return Charger
};
module.exports = {
  initSource: initSource,
Charger: Charger
} 

