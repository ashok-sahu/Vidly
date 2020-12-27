const router = require("express").Router();
const { getUser, createUser } = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");
const {
  checkUser,
  isRequestValidated,
} = require("../validators/user.validator");

router
  .get("/me", auth, getUser)
  .post("/", checkUser, isRequestValidated, createUser);

module.exports = router;
