const router = require('express').Router()
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const app = express()
const dotenv = require('dotenv')

const getConfigSwagger = require('./middleware/swagger.js')

dotenv.config()

const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres'
})

client.connect()
console.log("Connecté")

const server = app.listen(8085, function () {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http//%s:%s', host, port)
})

app.use('/api-doc', swaggerUI.serve)
app.get('/api-doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = router