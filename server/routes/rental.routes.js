const router = require("express").Router();
const {
  getRental,
  getrentals,
  createReantal,
} = require("../controllers/rental.controller");
const {
  checkRental,
  isRequestValidated,
} = require("../validators/rental.validator");

router
  .get("/", getrentals)
  .get("/:id", getRental)
  .post("/", checkRental, isRequestValidated, createReantal);

module.exports = router;
