/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here
      //Feedback.belongsTo(models.User, { foreignKey: 'user_id',targetKey: 'id',  as: 'userFeedback' })
      //Feedback.belongsTo(models.Charger, { foreignKey: 'charger_id',targetKey: 'id', as: 'chargerFeedback' })
      
    }
  };
  Feedback.init({
    user_id: DataTypes.INTEGER,
    charger_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};*/


'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
import {User} from './user'
import {Charger} from './charger'
import {Charger_type} from './charger_type'

class Feedback extends Model {

  static associate(models) {
    console.log("🚀 ~ Feedback ~ associate ~ models:", models)
 
     // define association here
     //Feedback.hasOne(models.User, { foreignKey: 'user_id', targetKey: 'id',  as: 'user' })
     Feedback.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id',  as: 'user' })
     Feedback.belongsTo(Charger, { foreignKey: 'charger_id',targetKey: 'id',  as: 'charger' })
     Feedback.belongsTo(Charger_type, { foreignKey: 'type_id',targetKey: 'id',  as: 'type' })

   }

  


  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
    
}



const initSource = (sequelize, DataTypes) => {
  Feedback.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    
    },
    user_id: DataTypes.INTEGER,
    charger_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback
};

module.exports = {
  initSource: initSource,
  Feedback: Feedback
}
