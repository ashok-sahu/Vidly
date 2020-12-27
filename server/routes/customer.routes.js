const router = require("express").Router();
const {
  getAllCustmers,
  updateCustomer,
  addCustomer,
  getCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");
const {
  isRequestValidated,
  checkCustomer,
} = require("../validators/customer.validator");

router
  .get("/", getAllCustmers)
  .get("/:id", getCustomer)
  .post("/",checkCustomer,isRequestValidated, addCustomer)
  .put("/:id", checkCustomer, isRequestValidated, updateCustomer)
  .delete("/:id", deleteCustomer);

module.exports = router;
