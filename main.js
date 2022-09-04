const express = require("express");
const app = express();
//this both are used for swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger/swagger.yaml");

// routers import
const sample = require("./routes/sample");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "R API",
      description: "APi are deveoping for R project",
      contact: {
        name: "Rohith Reddy Mandala",
      },
      servers: ["http://localhost:4444"],
    },
  },
  // ['.routes/*.js']
  apis: ["main.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Routes
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/sample", sample);

/**
 * @swagger
 * /:
 *   get:
 *     summary: ado / tho rayali ani rasina antha
 *     responses:
 *       200:
 *         description: this is for testing
 */

app.get("/", (req, res) => {
  res.status(200).send({
    error: false,
    message: "pani chasthundi kabata ee msg vasthundi ",
    data: "ee url ami data ledu so vara url try chaii marii",
  });
});

app.listen(4444, (req) => console.log(" i am started"));
