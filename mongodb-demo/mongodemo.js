const express = require("express");
const mongoose = require("mongoose");
const movie = require("./model/movie");
const bodyParser = require("body-parser");
//first connect to the mongodb database
mongoose
  .connect(
    "mongodb+srv://Dhruv:Dk22042003@democluster.pjoqhjo.mongodb.net/dbpractice?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB....");
    //make an object app
    const app = express();

    //usebodyparser middleware to parse all the input from the ulr-encoded form to json object
    app.use(bodyParser.urlencoded({ extended: true }));

    //get all movies
    app.get("/", async (req, res) => {
      const allMovies = await movie.find();
      res.send(allMovies);
    });

    //get movie by id
    app.get("/:id", async (req, res) => {
      const foundmovie = await movie.findOne({ mID: req.params.id });
      res.send(foundmovie);
    });

    //delete by id
    app.delete("/:id", async (req, res) => {
      const foundmovie = await movie.deleteOne({ mID: req.params.id });
      res.send(foundmovie);
    });

    //create new movie
    app.post("/movie", async (req, res) => {
      const mov = new movie();
      mov.movieName = req.body.mn;
      mov.woodtype = req.body.mw;
      //genreArray = req.body.mg.split(' ');
      mov.genres = req.body.mg.split(" ");
      mov.isRRated = req.body.mr;
      mov.mID = req.body.mi;
      mov.price = req.body.mp;
      try {
        const data = await mov.save();
        res.send("User Successfully created");
      } catch (e) {
        for (field in e.errors) {
          console.log(e.errors[field].message);
        }
        res.send(e.message);
      }
      //res.send(data);
    });

    //edit , update by id
    app.put("/movie/:id", async (req, res) => {
      const fm = await movie.findOne({ mID: req.params.id });
      fm.movieName = req.body.mn;
      fm.woodtype = req.body.mw;
      fm.genres = req.body.mg;
      fm.isRRated = req.body.mr;
      fm.mID = req.body.mi;
      fm.price = req.body.mp;
      try {
        await fm.save();
        res.send(fm);
      } catch (e) {
        for (field in e.errors) {
          console.log(e.errors[field].message);
        }
        res.send(e.message);
      }
    });

    //listener function to actually start the server at specified port
    app.listen(3002, () => {
      console.log("Sever started at port @3002");
    });
  })
  .catch((err) => console.log("Could not connect to db...", err));
