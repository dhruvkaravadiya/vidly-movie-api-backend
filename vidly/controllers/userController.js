const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

async function getUser(req, res) {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
}

async function createNewUser(req, res) {
 
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("Email is already registered.");
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(11);
    user.password = await bcrypt.hash(user.password,salt);
    await user.save();
    
    const token = user.generateAuthToken();
    res.header('x-auth-token',token)
      .send({
       _id: user._id,
      name: user.name,
      email: user.email 
      });
 
}

module.exports = {
  getUser,
  //getUserById,
  createNewUser,
  //updateUserById,
  //deleteUserById
};
