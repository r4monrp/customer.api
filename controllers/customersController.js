var express = require('express');
var customerController = express.Router();
var business = require('../business/business');

/* GET home page. */
customerController.get('/', function(req, res, next) {
  res.render('customers', { title: 'Customers API' });
});

/* GET all customers. */
customerController.get('/customers', function (req, res, next) {
    var customers = business.getAll();
       res.json(customers);
       res.end();
});

module.exports = customerController;
