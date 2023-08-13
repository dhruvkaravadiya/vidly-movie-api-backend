const fs = require('fs');
const Genre = require('../models/genre');
const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://Dhruv:Dk22042003@democluster.pjoqhjo.mongodb.net/Vidly?retryWrites=true&w=majority');
const genreData = fs.readFileSync('../genres.txt','utf-8');
const genreArray = genreData.split('\n').map((genre)=>{return {name : genre.trim()};});

Genre.insertMany(genreArray);