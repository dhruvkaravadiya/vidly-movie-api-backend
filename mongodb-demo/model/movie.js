const mongoose = require("mongoose");

//second define the document schema
const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    lowercase:true,
  },
  woodtype: {
    type: String,
    enum: ["Bollywood", "Hollywood", "Tollywood"],
    required: true,
    trim:true,
  },
  genres: {
    type: String,
    validate: {
      isAsync:true,
      validator: (v,callback) => {
        setTimeout(()=>{
          const result = v && v.length > 0;
          callback(result);
        },3000);
      },
      message: "A movie should have atleast one Genre",
    },
  },
  isRRated: Boolean,
  mID: Number,
  price: {
    type: Number,
    required: () => {
      return this.isRRated;
    },
    min: 2,
    max: 10,
    getter:(v)=>{Math.round(v)},
    setter:(v)=>{Math.round(v)},
  },
});

module.exports = mongoose.model("movie", movieSchema);
