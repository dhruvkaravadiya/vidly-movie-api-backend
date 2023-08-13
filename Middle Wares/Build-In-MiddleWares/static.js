// express.static() is a built in middle ware which takes a folder path as parameter
// usually the public folder , adn its used to display the static file, like
// html or txt or xml files. 

const express = require("express");
const app = express();

// use express.static middleware to serve static files
app.use(express.static('../../public'));

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});