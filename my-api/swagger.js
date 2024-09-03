const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuração inicial do Swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Image Management API',
        version: '1.0.0',
        description: 'API para gerenciar upload e obtenção de imagens',
    },
    servers: [
        {
            url: 'http://localhost:5000', // Atualize conforme a URL do seu ambiente
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Caminho para os arquivos de rotas onde você documentará seus endpoints
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
