const express = require("express");
const app = express();

// use express.json middleware to parse JSON data
app.use(express.json());

// route handler
app.post("/api/users", (req, res) => {
  const user = req.body;
  console.log(user);
  res.send("User created successfully!");
});

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
