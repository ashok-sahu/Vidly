const { check, validationResult } = require("express-validator");

exports.checkRental = [
  check("customerId", "customerId is required")
    .notEmpty()
    .isString()
    .isMongoId(),
  check("movieId", "movieId is required").notEmpty().isString().isMongoId(),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
