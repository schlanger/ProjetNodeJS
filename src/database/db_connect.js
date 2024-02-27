const { Client } = require('pg')
const dotenv = require('dotenv')

dotenv.config()


const client = new Client({
    host: process.env.HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

client.connect()
console.log("Connecté")

module.exports = client;