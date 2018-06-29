var customerDB = require('../provider/customerDB');

module.exports = {
	getAll: function () {
        var customers = customerDB.getAll();
        console.log(customers);
        return customers;
	}
  };