//database credentials
const dotevn = require('dotenv');
dotevn.config({path: './.env'});

const config = {
    db: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
    },
    listPerPage: 30,
  };
  module.exports = config;