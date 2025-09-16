const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});