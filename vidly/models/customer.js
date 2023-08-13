const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    cname:{
        required:true,
        type:String,
        minlength:5,
        maxlength:20,
    } ,
    cphone: {
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
    },
    isGold:{
        type:Boolean,
        required:false,
    }
});

module.exports = mongoose.model('Customer',customerSchema);