const { Rental, validate } = require('../models/rental');
const Movie  = require('../models/movie');
const Customer  = require('../models/customer');
const mongoose = require('mongoose');

// Apply autopopulate middleware to Rental schema
Rental.schema.plugin(require('mongoose-autopopulate'));

async function getAllRentals(req, res) {
  
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
 
}

async function createRental(req, res) {
  
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');

    const session = await mongoose.startSession();
    session.startTransaction();

    let rental;
    try {
      rental = new Rental({
        customer: customer,
        movie: movie
      });

      rental = await rental.save({ session });

      movie.numberInStock--;
      await movie.save({ session });

      await session.commitTransaction();
      session.endSession();

      res.send(rental);
    } catch (error) {
      await session.abortTransaction();
      session.endSession();

      console.error(error);
      res.status(500).send('Failed to create rental.');
    }
 
}

async function getRentalById(req, res) {
  
    const rental = await Rental.findById(req.params.id);

    if (!rental) return res.status(404).send('The rental with the given ID was not found.');

    res.send(rental);
  
}

module.exports = {
  getAllRentals,
  createRental,
  getRentalById,
};
