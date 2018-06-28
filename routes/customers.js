var express = require('express');
var router = express.Router();
var customerDB = require('./provider/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customers', { title: 'Customers API' });
});

/* GET all customers. */
router.get('/customers', function (req, res, next) {
    var customers = customerDB.getAll();
       res.json(customers);
       res.end();
});

module.exports = router;
