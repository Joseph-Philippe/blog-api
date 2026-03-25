const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Blog Joseph Philippe🚀",
            version: "1.0.0",
            description: "API de gestion des articles de blog"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(express.json());

const articleRoutes = require('./routes/articles.js');
app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
    res.send('API OK 🚀');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 3000;

app.listen(PORT, () => {
    console.log("\n🚀 Serveur lancé !");
    console.log(`👉 API : http://localhost:${PORT}`);
    console.log(`📚 Documentation Swagger : http://localhost:${PORT}/api-docs`);
    console.log(`🔍 Test GET : http://localhost:${PORT}/api/articles`);
    console.log(`🔎 Search : http://localhost:${PORT}/api/articles/search?query=test\n`);
});