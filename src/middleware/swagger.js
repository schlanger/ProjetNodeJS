const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Définition de l'architecture de base de la documentation
const swaggerGeneration = {
    swaggerDefinition: {
    openapi: '3.0.0',
    info: {
        title: 'API',
        version: '1.0.0',
        description: 'API documentation',
    },
    servers: [
        {
        url: 'http://localhost:8085/api/',
        description: 'Development server',
        },
    ],

    },
    apis : ['./src/routes/*.js']
};

const swaggerOptions = swaggerJsDoc(swaggerGeneration);


