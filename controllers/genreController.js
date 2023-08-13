const Genre = require("../models/genre");

async function getGenres(req, res) {
  //throw new Error('Erro in Get All Genres');
  const genres = await Genre.find();
  if (!genres) {
    return req.status(404).send("Empty Genre API");
  }
  res.send(genres);
}

async function getGenreById(req, res) {
  const foundGenre = await Genre.findById(req.params.id);
  if (!foundGenre) {
    return res
      .status(404)
      .send(`Genre with id: ${req.params.id} was not found`);
  }
  res.send(foundGenre);
}

async function deleteGenre(req, res) {
  const deleteGenre = await Genre.findByIdAndDelete({ _id: req.params.id });
  if (!deleteGenre) {
    return res
      .status(404)
      .send(`Genre with id: ${req.params.id} was not found`);
  }
  res.send(`Genre with id: ${req.params.id} Successfully Deleted`);
}

async function createGenre(req, res) {
  const result = Genre.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  let g = new Genre();
  g.name = req.body.name;
  g = await g.save();
  res.send(g);
}

async function updateGenre(req, res) {
  const result = Genre.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const updatedGenre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!updatedGenre) {
    return res
      .status(404)
      .send(`Genre with id: ${req.params.id} was not found`);
  }
  res.send(updatedGenre);
}

module.exports = {
  getGenres,
  getGenreById,
  deleteGenre,
  createGenre,
  updateGenre,
};
