const pgp = require('pg-promise')();
require('dotenv').config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

const cn = DATABASE_URL
  ? {
      connectionString: 'postgres://collection-corner-main-db-069e279c6a93961a6:n6zAvuGkrDsfK95v8ATUra34RV1Ake@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/collection-corner-main-db-069e279c6a93961a6',
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

const db = pgp(cn);

module.exports = db;
