const router = require('express').Router()
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const client = require('../src/database/db_connect.js')

const getConfigSwagger = require('./middleware/swagger.js')

// Importation des routes 
const userRoute = require('./routes/User.route.js')
//const docRoute = require

// Initialisation et configuration

dotenv.config();

app.use(express.json()); // Spécifie la réponse en JSON
app.set('json spaces' , 2); // Spécifie l'indentation de la réponse en JSON

// Déclaration des endpoints 
//server.use('/api/doc',)
app.use('/api/users',userRoute);

 

const server = app.listen(8085, function () {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http//%s:%s', host, port)
})

app.use('/api', swaggerUI.serve)
app.get('/api', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = app;