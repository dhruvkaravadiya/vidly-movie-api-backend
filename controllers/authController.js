const jwt = require('jsonwebtoken');
const { User } = require("../models/user");
const bcrypt = require('bcrypt');
const Joi = require('joi');
const config = require('config');
async function getAllUsers(req, res) {
  const users = await User.find();
  res.send(users);
}

async function createNewUser(req, res) {

    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(400).send("Invalid Email or Password.");
    }
    const validPassword = await bcrypt.compare(req.body.password , existingUser.password);
    if(!validPassword){
        return res.status(400).send("Invalid Email or Password.");
    }
    const token = existingUser.generateAuthToken();
    res.send(token);
  }

function validate(req){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    });
    return schema.validate(req);
}

module.exports = {
  getAllUsers,
  //getUserById,
  createNewUser,
  //updateUserById,
  //deleteUserById
};
