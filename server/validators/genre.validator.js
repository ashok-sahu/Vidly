const { check, validationResult } = require("express-validator");

exports.checkGenre = [
  check("name", "Name is required")
    .notEmpty()
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage("name must be between 5 to 50 characters")
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
