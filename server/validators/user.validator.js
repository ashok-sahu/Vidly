const { check, validationResult } = require("express-validator");

exports.checkUser = [
  check("name", "name is required!")
    .notEmpty()
    .isString()
    .isLength({
      min: 5,
      max: 255,
    })
    .withMessage("name must be between 5 to 255 characters"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password", "password is required")
    .notEmpty()
    .isLength({
      min: 5,
    })
    .withMessage("Password must contain at least 5 characters")
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
