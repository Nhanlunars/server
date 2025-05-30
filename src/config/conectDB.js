const { Sequelize } = require('sequelize');
import { configurations } from './configuration';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
  ...configurations.db,
  logging: console.log,
});

let conectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = conectDB;
