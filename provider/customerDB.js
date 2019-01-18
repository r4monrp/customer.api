var dbConnection = require('../dbConnection/db');

function getAll(){
		return new Promise((resolve, reject) => {
			request.get(options, (err, resp, body) => {
					if (err) {
							console.log(err);
							reject(err);
					} else {
						dbConnection.sequelize
						.query('SELECT * FROM customers',{model: Customers})
						.then(customers => {
							console.log(customers);
							resolve(customers);
							})	
					}
			})
	})
}


module.exports = {
	getAll
  };