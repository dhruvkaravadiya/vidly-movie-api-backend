const express = require("express");
const app = express();

//custom middleware
const myMiddleware = (req, res, next) => {
  console.log("Middleware function called");
  next(); // call the next middleware or route handler function
};

// use middleware function in express app
app.use(myMiddleware);

// route handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
