const express = require("express");
require("dotenv").config();
const app = express();
const config = require("config");
const winston = require("winston");
const mongoose = require("mongoose");
const pass = process.env.Dhruv_CLUSTER_PASSWORD;
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const dbConnectionLink = `mongodb+srv://Dhruv:${pass}@democluster.pjoqhjo.mongodb.net/Vidly?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3001;
mongoose
  .connect(dbConnectionLink, { useUnifiedTopology: true })
  .then(() => {
    winston.info("Connected to Vidly Database");
  })
  .catch((err) => {
    console.log(err.message);
  });
require("dotenv").config();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/configurations");
require("./startup/validation");
require("./startup/launch");
//uncaught exception
// throw new Error('Uncaught Exception in Index.js');
// uncaught promise
// const p = Promise.reject(new Error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
// p.then(()=>{console.log('Done')});

// process.on('unhandledRejection',(ex)=>{
//   throw ex;
// });
if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server started @ port ${PORT}`);
});
