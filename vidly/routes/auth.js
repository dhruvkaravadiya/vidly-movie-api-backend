const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/',authController.getAllUsers);

router.post('/',authController.createNewUser);

module.exports = router;
