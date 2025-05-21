// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Usege_history extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       //Usege_history.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id',  as: 'userHistory' })
//       //Usege_history.belongsTo(models.Charger, { foreignKey: 'charger_id',targetKey: 'id',  as: 'chargerHistory' })
//       //Usege_history.belongsTo(models.Charger_type, { foreignKey: 'type_id',targetKey: 'id', as : 'typeHistory' })
//     }
//   };
//   Usege_history .init({
//     user_id : DataTypes.INTEGER,
//     charger_id: DataTypes.INTEGER,
//     type_id : DataTypes.INTEGER,
//     start_time : DataTypes.DATE,
//     end_time : DataTypes.DATE,
//     number_start: DataTypes.FLOAT,
//     number_end: DataTypes.FLOAT,
//     cost: DataTypes.FLOAT,
//   }, {
//     sequelize,
//     modelName: 'Usege_history',
//   });
//   return Usege_history ;
// };

'use strict';
const { Model } = require('sequelize');
const db = require('.');
import { User } from './user';
import { Charger } from './charger';
import { Charger_type } from './charger_type';

class Usege_history extends Model {
  static associate(models) {
    // define association here
    Usege_history.belongsTo(User, {
      foreignKey: 'user_id',
      targetKey: 'id',
      as: 'user',
    });
    Usege_history.belongsTo(Charger, {
      foreignKey: 'charger_id',
      targetKey: 'id',
      as: 'charger',
    });
    Usege_history.belongsTo(Charger_type, {
      foreignKey: 'type_id',
      targetKey: 'id',
      as: 'type',
    });
  }

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
}

const initSource = (sequelize, DataTypes) => {
  Usege_history.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      charger_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      number_start: DataTypes.FLOAT,
      number_end: DataTypes.FLOAT,
      cost: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Usege_history',
    },
  );
  return Usege_history;
};

module.exports = {
  initSource: initSource,
  Usege_history: Usege_history,
};
