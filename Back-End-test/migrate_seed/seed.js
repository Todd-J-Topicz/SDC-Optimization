const { Pool } = require("pg")
const fs = require("fs")

const POSTGRES_HOST = 'ec2-3-230-24-12.compute-1.amazonaws.com' || 'postgres'
const POSTGRES_DB =  'd8e6g7jmq6r32' || 'Turo_webpage';
const POSTGRES_USER =  'gwimwkvniswuuh' || 'postgres';
const POSTGRES_PASSWORD = '80910ab4a86ca2f873bad9190e845528f80ada4a508d17b0e40cff7e9dabf2de' || 'password';

// Connect to database
const dbConfig = {
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  port: 5432,
  connectionString: process.env.DATABASE_URL, 
  ssl: {
      rejectUnauthorized: false
  },
  multipleStatements: true, // IMPORTANT
}

const pool = new Pool(dbConfig);
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    console.log(process.env.DATABASE_URL)
    console.log('Connected to database')
  })

console.log("Running SQL seed...")

const seedQuery = fs.readFileSync('./db/seed.sql', { encoding: 'utf8' })

  pool.query(seedQuery, (err, res) => {
    if (err)
      console.log(err)
    else
      console.log('Seed Completed!')
      pool.end()
  })