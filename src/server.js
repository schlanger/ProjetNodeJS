const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./middleware/swagger-output.json')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const client = require('../src/database/db_connect.js')


// Importation des routes 
const userRoute = require('./routes/user.route.js')
const orderRoute = require('./routes/order.route.js')
//const docRoute = require

// Initialisation et configuration

dotenv.config();

app.use(express.json()); // Spécifie la réponse en JSON
app.set('json spaces' , 2); // Spécifie l'indentation de la réponse en JSON

// Déclaration des endpoints 
//server.use('/api/doc',)
app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use('/users',userRoute);
app.use('/order',orderRoute);
 

 

app.listen(8000, () => {

    console.log('Server is running on port  http://localhost:8000/api')
})

module.exports = app;