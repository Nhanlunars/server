// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User_device extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       //User_device.belongsTo(models.Changer, { foreignKey: 'charger_id',targetKey: 'id', as: 'chargerDevice' })
      
//     }
//   };
//   User_device.init({
//     user_id: DataTypes.INTEGER,
//     charger_id: DataTypes.INTEGER,
//     type_id: DataTypes.INTEGER,
//     fcm_token: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'User_device',
//   });
//   return User_device;
// };


'use strict';
const {
  Model
} = require('sequelize');

class User_device extends Model {
  
  static associate(models) {
    // define association here


  }
};

const initSource = (sequelize, DataTypes) => {
    User_device.init({
    id: {
      type:  DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    charger_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    fcm_token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User_device',
  });
  return User_device
};
module.exports = {
  initSource: initSource,
  User_device: User_device
} 

