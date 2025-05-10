// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Owner_charger_info extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       //Owner_charger_info.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id', as: 'userInfo' })
      
//     }
//   };
//   Owner_charger_info.init({
//     user_id: DataTypes.INTEGER,
//     bank_name: DataTypes.STRING,
//     account_number: DataTypes.STRING,
//     account_name: DataTypes.STRING,
//     picture: DataTypes.BLOB('long'),
//   }, {
//     sequelize,
//     modelName: 'Owner_charger_info',
//   });
//   return Owner_charger_info;
// };


'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
import { User } from './user';
import { Charger } from './charger';

class Owner_charger_info extends Model {

  static associate(models) {
    console.log("🚀 ~ Owner_charger_info ~ associate ~ models:", models)
 
     // define association here
    Owner_charger_info.belongsTo(User, { foreignKey: 'user_id',targetKey: 'id', as: 'user' })
    //Owner_charger_info.belongsTo(Charger, { foreignKey: 'charger_id',targetKey: 'id', as: 'charger' })


   }

  


  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
    
}



const initSource = (sequelize, DataTypes) => {
  Owner_charger_info.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    
    },
    user_id: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    account_name: DataTypes.STRING,
    picture: DataTypes.BLOB('long'),
  }, {
    sequelize,
    modelName: 'Owner_charger_info',
  });
  return Owner_charger_info
};

module.exports = {
  initSource: initSource,
  Owner_charger_info: Owner_charger_info
}
