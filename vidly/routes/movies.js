const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);
router.delete("/:id", movieController.deleteMovie);
router.post("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);

module.exports = router;
