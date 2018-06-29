var express = require('express');
var customerController = express.Router();
var business = require('../business/business');

/* GET all customers. */
customerController.get('/customers', function (req, res, next) {
    var customers = business.getAll();
       res.json(customers);
       res.end();
});

module.exports = customerController;
