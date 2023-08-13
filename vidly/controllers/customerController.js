const Customer = require("../models/customer");

async function getCustomers(req, res) {
 
    const customers = await Customer.find();
    if (!customers) {
      return res.status(404).send("Empty Customer Collection");
    }
    res.send(customers);
 
}

async function getCustomerById(req, res) {
  
    const foundCustomer = await Customer.findById({ _id: req.params.id });
    if (!foundCustomer) {
      return res
        .status(404)
        .send(`Customer with id: ${req.params.id} was not found`);
    }
    res.send(foundCustomer);
 
}

async function deleteCustomer(req, res) {
 
    const deleteCustomer = await Customer.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!deleteCustomer) {
      return res
        .status(404)
        .send(`Customer with id: ${req.params.id} not found`);
    }
    res.send("Deletion Successful");
  
}

async function createCustomer(req, res) {
  
    const result = Customer.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }
    let c = new Customer();
    c.cname = req.body.cname;
    c.cphone = req.body.cphone;
    c.isGold = req.body.isGold;
    c = await c.save();
    res.send(c);
 
}

async function updateCustomer(req, res) {
  
    const result = Customer.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          cname: req.body.cname,
          cphone: req.body.cphone,
          isGold: req.body.isGold,
        },
      },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).send(`Customer with id: ${req.params.id} not found`);
    }

    res.send(updatedCustomer);
 
}

module.exports = {
  getCustomers,
  getCustomerById,
  deleteCustomer,
  createCustomer,
  updateCustomer,
};
