require('dotenv').config();
export const configurations = {
  port: process.env.PORT || 3000,
  db: {
    username: process.env.DB_USER_NAME || '',
    database: process.env.DB_DATABASE_NAME || '',
    password: process.env.DB_DATABASE_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  mailer: {
    host: process.env.MAILER_HOST || '',
    port: process.env.MAILER_PORT || 587,
    from: process.env.MAILER_FROM || 'chargingsmart@gmail.com',
    password: process.env.MAILER_PASSWORD || '',
  },
  opt: {
    expired_period: 2, // expired after 2 day
  },
};
