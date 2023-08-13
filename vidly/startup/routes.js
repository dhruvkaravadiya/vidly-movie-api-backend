const express = require('express');
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rentals = require("../routes/rentals");
const users = require("../routes/users");
const auth = require("../routes/auth");
const genres = require("../routes/genres");
const error = require("../middlewares/error");

function routes(app) {
  app.use(express.json());
  app.use("/vidly/genres", genres);
  app.use("/vidly/customers", customers);
  app.use("/vidly/movies", movies);
  app.use("/vidly/rentals", rentals);
  app.use("/vidly/users", users);
  app.use("/vidly/auth", auth);
  app.use(error);
};

module.exports  = routes;