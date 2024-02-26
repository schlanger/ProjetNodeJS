
//importation des modules 

const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

// Définition de l'ensemeble des constantes utilisant le middleware swagger
const getConfigSwagger = require('../src/middleware/swagger.js');

// Définition des routes 

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(getConfigSwagger.swaggerOptions,getConfigSwagger.swaggerSortByHTTPRequest));

module.exports = router;