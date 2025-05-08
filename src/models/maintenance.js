// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Maintenance extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       //Maintenance_log.belongsTo(models.Charger, { foreignKey: 'charger_id', targetKey: 'id', as: 'chargerLog' })
     
//       }
//   };
//   Maintenance.init({
//     charger_id: DataTypes.INTEGER,
//     type_id: DataTypes.INTEGER,
//     maintenance_date: DataTypes.DATE,
//     completion_date: DataTypes.DATE,
//     maintenance_type: DataTypes.STRING,
//     technician_name: DataTypes.STRING,
//     maintenance_cost: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'Maintenance',
//   });
//   return Maintenance;
// };

'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
import {Charger} from './charger'
import {Charger_type} from './charger_type'
class Maintenance extends Model {

  static associate(models) {
    console.log("🚀 ~ Maintenance ~ associate ~ models:", models)
 
     // define association here
     // Maintenance.hasOne(models.User, { foreignKey: 'user_id', targetKey: 'id',  as: 'user' })
     Maintenance.belongsTo(Charger, { foreignKey: 'charger_id',targetKey: 'id',  as: 'charger' })
     Maintenance.belongsTo(Charger_type, { foreignKey: 'type_id',targetKey: 'id', as : 'type' })
   }

  


  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
    
}



const initSource = (sequelize, DataTypes) => {
  Maintenance.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    
    },
    charger_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    maintenance_date: DataTypes.DATE,
    completion_date: DataTypes.DATE,
    maintenance_type: DataTypes.STRING,
    technician_name: DataTypes.STRING,
    maintenance_cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Maintenance',
  });
  return Maintenance
};

module.exports = {
  initSource: initSource,
  Maintenance: Maintenance
}
