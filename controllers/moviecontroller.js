const Genre = require("../models/genre");
const Movie = require("../models/movie");
const validateMovie = require("../models/movie");

async function getAllMovies(req, res) {
  
    const movies = await Movie.find().populate("genre", "name");
    if (movies.length === 0) {
      return res.status(204).send(`No movies found`);
    }
    res.send(movies);
  
}

async function getMovieById(req, res) {
  
    const foundMovie = await Movie.findById(req.params.id);
    if (!foundMovie) {
      return res
        .status(404)
        .send(`Movie with id: ${req.params.id} was not found`);
    }
    res.send(foundMovie);
  
}

async function deleteMovie(req, res) {
 
    const foundMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!foundMovie) {
      return res
        .status(404)
        .send(`Movie with id: ${req.params.id} was not found`);
    }
    res.send(`Movie Deleted Successfully`);
 
}

async function createMovie(req, res) {
 
    const { error } = validateMovie(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const genre = await Genre.findOne({ name: req.body.genre.name });
    if (!genre) {
      return res.status(400).send("Invalid Genre");
    }
    const movie = new Movie({
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name,
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
    });
    // Save the movie to the database
    await movie.save();
    res.send("New Movie Create Successfully");
 
}

async function updateMovie(req, res) {
 
    const { error } = validateMovie(req.body);
    if (error) {
      return res.status(400).send(result.error.details[0].message);
    }
    const genre = await Genre.findOne({ name: req.body.genre.name });
    if (!genre) {
      return res.send("Invalid Genre");
    }
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          genre: {
            _id: genre._id,
            name: genre.name,
          },
          numberInStock: req.body.numberInStock,
          dailyRentalRate: req.body.dailyRentalRate,
        },
      },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).send("Movie Not Found");
    }
    await updatedMovie.save();
    res.send('Movie Updated Successfully');
  
}

module.exports = {
  getAllMovies,
  getMovieById,
  deleteMovie,
  createMovie,
  updateMovie,
};
