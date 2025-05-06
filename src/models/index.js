'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {
};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {...config, logging: console.log});
} else {
  console.log("Logging")
  sequelize = new Sequelize(config.database, config.username, config.password, {...config, logging: console.log});
}

fs
  .readdirSync(__dirname)
  .filter(file => {
     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    console.log("🚀 ~ file:", file)
    //return ['user.js', 'reservation.js','charger.js', 'charger_type.js'].includes(file)
  })

  .forEach(file => {
    const {initSource} = require(path.join(__dirname, file))
  
    const model = initSource(sequelize, Sequelize.DataTypes);
    console.log("🚀 ~ model:", model)
    
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
