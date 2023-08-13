const auth = require('../middlewares/auth');
const admin  = require('../middlewares/admin');
const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");
const asyncMiddleware = require("../middlewares/async");
//get All Genres
router.get("/", asyncMiddleware(genreController.getGenres));
//get Genre by Id
router.get("/:id", asyncMiddleware(genreController.getGenreById));
//Delete Genre by Id
router.delete("/:id",[auth,admin], asyncMiddleware(genreController.deleteGenre));
//Create new Genre
router.post("/", auth,asyncMiddleware(genreController.createGenre));
//Update a genre
router.put("/:id", asyncMiddleware(genreController.updateGenre));
module.exports = router;