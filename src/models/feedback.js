'use strict';
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
    static associate(models) {
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
};