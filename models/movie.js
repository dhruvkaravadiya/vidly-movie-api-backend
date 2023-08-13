const mongoose = require("mongoose");
//const Genre = require('./genre');
const movieSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
    maxLenght: 50,
    minlength: 3,
  },
  genre: {
    name: {
      type: String,
      required: true
    }
  },
  numberInStock: {
    required: true,
    type: Number,
    max: 300,
    min: 100,
  },
  dailyRentalRate: {
    required: false,
    type: Number,
    max: 300,
    min: 100,
  },
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
  };
  return Joi.validate(movie, schema);
}

exports.validate = validateMovie;
module.exports = mongoose.model("Movie", movieSchema);
