const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const postRouter = require("./src/routes/post")
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB conectado'))
.catch((err) => console.error('Erro ao conectar ao MongoDB', err));

const swaggerOptions = {
  swaggerDefinition: {
      openapi: '3.0.0',
      info: { 
          title: "API de Posts",
          version: '1.0.0',
          description: "Documentação da API de Posts",
          contact: {
              name: "Seu Nome",
          },
      },
      servers: [
          {
              url: "http://localhost:3001",
              description: "Servidor de Desenvolvimento",
          },
      ],
      components: {
        schemas: {
          Post: {
            type: 'object',
            required: ['title', 'content'],
            properties: {
              title: {
                type: 'string',
                description: 'Título do post',
              },
              content: {
                type: 'string',
                description: 'Conteúdo do post',
              },
              imageUrl: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    type: { type: 'string' },
                    url: { type: 'string' },
                  }
                },
                description: 'Array de URLs de imagens associadas ao post',
              },
              status: {
                type: 'string',
                description: 'Status do post',
              },
              link: {
                type: 'string',
                description: 'Link associado ao post',
              },
              likes: {
                type: 'integer',
                description: 'Número de likes do post',
              },
            },
            example: {
              title: "Meu primeiro post",
              content: "Conteúdo incrível do post",
              imageUrl: [
                { type: "thumbnail", url: "https://example.com/image1.jpg" },
                { type: "fullsize", url: "https://example.com/image2.jpg" },
              ],
              status: "draft",
              link: "https://example.com",
              likes: 100,
            },
          },
        },
      },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/posts", postRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
