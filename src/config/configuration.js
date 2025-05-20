export const configurations = {
  db: {
    username: process.env.DB_USER_NAME || '',
    database: process.env.DB_DATABASE_NAME || '',
    password: process.env.DB_DATABASE_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
};
