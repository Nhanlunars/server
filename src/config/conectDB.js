const { Sequelize } = require('sequelize');
import { configurations } from './configuration';

console.log('🚀 ~ configurations:', configurations);

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
  ...configurations.db,
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
