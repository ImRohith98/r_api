require("dotenv").config();
const express = require("express");
const app = express();
const bodypraser = require("body-parser");
app.use(bodypraser.json());
//this both are used for swagger
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger/swagger.yaml");

// this for cors
var cors = require("cors");

// db details
const connectDB = require("./config/dbConnection");
const mongoose = require("mongoose");
connectDB();

// routers import
const sample = require("./routes/sample");
const users = require("./routes/users");

//cors part
const corsOptions = require("./config/corsConfig");
const port = process.env.NODE_PORT || 4444;
// cors enable
app.use(cors(corsOptions));

// Routes
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/user", users);
app.use("/sample", sample);

app.get("/", (req, res) => {
  res.status(200).send({
    error: false,
    message: "pani chasthundi kabata ee msg vasthundi ",
    data: "ee url ami data ledu so vara url try chaii marii",
  });
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, (req) => console.log(" i am started"));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
