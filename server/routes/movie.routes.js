const router = require("express").Router();
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
} = require("../controllers/movie.controller");
const {
  checkMovie,
  isRequestValidated,
} = require("../validators/movie.validator");

router
  .get("/", getMovies)
  .get('/:id',getMovie)
  .post("/", checkMovie, isRequestValidated, createMovie)
  .put("/:id",checkMovie, isRequestValidated,updateMovie)
  .delete('/:id',deleteMovie)

module.exports = router;
