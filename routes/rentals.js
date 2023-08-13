const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

router.get('/', rentalController.getAllRentals);
router.post('/', rentalController.createRental);
router.get('/:id', rentalController.getRentalById);

module.exports = router;
