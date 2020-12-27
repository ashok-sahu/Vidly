const router = require("express").Router();
const {
  getAllGenre,
  getGenre,
  addGenre,
  updateGenre,
  deleteGenre,
} = require("../controllers/genre.controller");
const {
  isRequestValidated,
  checkGenre,
} = require("../validators/genre.validator");

router
  .get("/", getAllGenre)
  .get("/:id", getGenre)
  .post("/", checkGenre, isRequestValidated, addGenre)
  .put("/:id", checkGenre, isRequestValidated, updateGenre)
  .delete("/:id", deleteGenre);

module.exports = router;
