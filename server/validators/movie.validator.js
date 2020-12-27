const { check, validationResult } = require("express-validator");

exports.checkMovie = [
  check("title", "Title is required")
    .notEmpty()
    .isString()
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage("Title must be between 5 to 50 characters"),
  check("genreId", "GnereID is required").notEmpty().isString().isMongoId(),

  check("numberInStock", "numberInStock is required").notEmpty().isNumeric(),

  check("dailyRentalRate", "dailyRentalRate is required")
    .notEmpty()
    .isNumeric(),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
