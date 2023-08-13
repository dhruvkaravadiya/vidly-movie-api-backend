const winston = require('winston');
const mongoose = require('mongoose');
const pass = process.env.Dhruv_CLUSTER_PASSWORD;
const dbConnectionLink = `mongodb+srv://Dhruv:${pass}@democluster.pjoqhjo.mongodb.net/Vidly?retryWrites=true&w=majority`;

function db(){
mongoose
  .connect(dbConnectionLink, { useUnifiedTopology: true })
  .then(() => {
    winston.info("Connected to Vidly Database");
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = db;