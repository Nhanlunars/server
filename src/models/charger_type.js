/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Charger_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   /* static associate(models) {
      // define association here
      //Charger_type.hasMany(models.Usege_history, { foreignKey: 'type_id', as: 'typeHistory' })
      //Charger_type.hasMany(models.Reservation, { foreignKey: 'type_id', as: 'typeResaervation' })
//
    }
  };
  Charger_type.init({
    charger_id: DataTypes.INTEGER,
    type_name: DataTypes.STRING,
    describe: DataTypes.STRING,
    default_price: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Charger_type',
  });
  return Charger_type;
};*/

'use strict';
const {
  Model
} = require('sequelize');
import {Charger} from './charger' 
class Charger_type extends Model {
  
  static associate(models) {
    // define association here
    //Charger_type.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
    //Charger_type.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
    //Charger_type.hasMany(models.Location, { foreignKey: 'Charger_type_id', as: 'Charger_typeLocation' })
    Charger_type.hasMany(models.Reservation, {
      foreignKey: 'type_id'
    })
    Charger_type.belongsTo(Charger, { foreignKey: 'charger_id', targetKey: 'id', as: 'charger' })

    //Charger_type.hasOne(models.Owner_charger_info, { foreignKey: 'Charger_type_id' })
    //Charger_type.hasMany(models.Notification, { foreignKey: 'Charger_type_id', as: 'Charger_typeNotification' })
    Charger_type.hasMany(models.Usege_history, { foreignKey: 'type_id'})
    Charger_type.hasMany(models.Feedback, { foreignKey: 'type_id' })
    Charger_type.hasMany(models.User_device, { foreignKey: 'type_id' })
    Charger_type.hasMany(models.Maintenance, { foreignKey: 'type_id' })
    //Charger_type.hasMany(models.OTP, { foreignKey: 'Charger_type_id', as: 'Charger_typeOTP' })

  }
};

const initSource = (sequelize, DataTypes) => {
  Charger_type.init({
    id: {
      type:  DataTypes.INTEGER,
      primaryKey: true,
    },
    charger_id: DataTypes.INTEGER,
    type_name: DataTypes.STRING,
    describe: DataTypes.STRING,
    default_price: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Charger_type',
  });
  return Charger_type
};
module.exports = {
  initSource: initSource,
Charger_type: Charger_type
} 