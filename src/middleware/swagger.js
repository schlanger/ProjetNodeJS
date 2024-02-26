const swaggerJsDoc = require('swagger-jsdoc');

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
        url: 'http://localhost:8081/api/v1',
        description: 'Development server',
        },
    ],

    },
    apis : ['./src/routes/*.js']
};

const swaggerOptions = swaggerJsDoc(swaggerGeneration);
