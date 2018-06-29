var dbConnection = require('../dbConnection/db');

module.exports = {
	getAll: function () {
		var params = {
			TableName : "customers"
		};
		dbConnection.scan(params, function(error, data){
			if(error){
				return error;
			}else{
				return data.Items;
			}
		});
	}
  };