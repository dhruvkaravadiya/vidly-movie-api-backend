const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        max:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:255
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    isAdmin:Boolean
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('jwtPrivateKey'));
    return token
}

const User = mongoose.model('User',userSchema); 
function validateUser(user){
    const schema = Joi.object({
        name : Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    });
    return schema.validate(user);
};
exports.validate = validateUser;
exports.User = User;