const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
router.get('/me',auth,userController.getUser);

router.post('/',userController.createNewUser);

module.exports = router;