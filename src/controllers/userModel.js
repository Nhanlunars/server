
import {Model} from 'sequelize'
class User extends Model {
  
    static associate(models) {
      // define association here
      //User.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
      //User.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
      //User.hasMany(models.Location, { foreignKey: 'user_id', as: 'userLocation' })
      User.hasMany(models.Reservation, {
        foreignKey: 'user_id'
      })
           // User.belongsTo(models.Reservation, { foreignKey: 'user_id', as: 'user' })
  
      //User.hasOne(models.Owner_charger_info, { foreignKey: 'user_id' })
      //User.hasMany(models.Notification, { foreignKey: 'user_id', as: 'userNotification' })
      //User.hasMany(models.Usege_histories, { foreignKey: 'user_id', as: 'userHistory' })
      //User.hasMany(models.Feedback, { foreignKey: 'user_id', as: 'userFeedback' })
      //User.hasMany(models.OTP, { foreignKey: 'user_id', as: 'userOTP' })
  
    }
  };
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
  
module.exports = {User, Charger}