const {Genre} = require("../models/genre.model");

//READ (GET)
exports.getAllGenre = async (req, res) => {
  const genre = await Genre.find().sort("name");
  res.status(200).send(genre);
};

//CREATE (POST)
exports.addGenre = async (req, res) => {
  const { name } = req.body;
  let genre = new Genre({ name });
  genre = await genre.save();
  res.status(201).json({
    status: "success",
    data: genre,
  });
};

//UPDATE (PUT)
exports.updateGenre = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const genre = await Genre.findByIdAndUpdate(
    id,
    { name: name },
    { new: true }
  );
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
};

//DELETE (DELETE)
exports.deleteGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findOneAndRemove(id);
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
};

//READ (GET)
exports.getGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findById(id);
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
};
