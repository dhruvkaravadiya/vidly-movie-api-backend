const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

//get All Customers
router.get("/", customerController.getCustomers);
//get Cutomer by Id
router.get("/:id", customerController.getCustomerById);
//Delete Exsiting Customer
router.delete("/:id", customerController.deleteCustomer);
//Create new Customer
router.post("/", customerController.createCustomer);
//Update Customer
router.put("/:id", customerController.updateCustomer);

module.exports = router;
