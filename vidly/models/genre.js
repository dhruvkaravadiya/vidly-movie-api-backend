const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    default: 'Unknown Genre' // Provide a default value
  },
});

module.exports = mongoose.model("Genre", genreSchema);
