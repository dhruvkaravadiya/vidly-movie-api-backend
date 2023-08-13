const express = require("express");
const app = express();

// use express.urlencoded middleware to parse URL-encoded data
//passing { extended : true } object helps to pass 
//complex arrays and objects in the req xxx-form-url-encodded
app.use(express.urlencoded({ extended: true }));

// route handler
app.post("/api/users", (req, res) => {
  const user = req.body;
  console.log("User Creation successful");
  res.send(user);
});

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
