/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
/*static associate(models) {
      // define association here
      Allcode.hasMany(models.User, { foreignKey: 'roleId', as: 'roleData' })
      Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' })



    }
  };
  Allcode.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
};*/

'use strict';
const { Model } = require('sequelize');
const db = require('.');
import { User } from './user';
import { Charger } from './charger';
import { Charger_type } from './charger_type';

class Allcode extends Model {
  static associate(models) {
    // define association here
    // Allcode.hasOne(models.User, { foreignKey: 'user_id', targetKey: 'id',  as: 'user' })
    //Allcode.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id',  as: 'user' })
  }

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
}

const initSource = (sequelize, DataTypes) => {
  Allcode.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Allcode',
    },
  );
  return Allcode;
};

module.exports = {
  initSource: initSource,
  Allcode: Allcode,
};
