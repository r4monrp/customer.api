var customerDB = require('../provider/customerDB');

function getAll(){
        return new Promise((resolve, reject) => {
                request.get(options, (err, resp, body) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        var customers = customerDB.getAll();
                        console.log(customers);
                        resolve(customers);
                    }
                })
            })
	}

module.exports = {
	getAll   
  };
  