'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const { configurations } = require('../config/configuration');
const basename = path.basename(__filename);
const db = {};

let sequelize = new Sequelize({
  ...configurations.db,
  logging: console.log,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })

  .forEach((file) => {
    // const { initSource } = require(path.join(__dirname, file));

    // const model = initSource(sequelize, Sequelize.DataTypes);

    // db[model.name] = model;
    const modelModule = require(path.join(__dirname, file));

  if (typeof modelModule.initSource !== 'function') {
    console.error(`❌ initSource is not a function in file: ${file}`);
    return; // bỏ qua file lỗi
  }

  const model = modelModule.initSource(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
