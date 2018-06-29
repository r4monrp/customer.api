var dbConnection = require('../dbConnection/db');

module.exports = {
	getAll: function () {
		var params = {
			TableName : "customers"
		};
		dbConnection.scan(params, function(error, data){
			if(error){
				console.log(error);
				return error;
			}else{
				console.log(data);
				console.log(data.Items);
				return data.Items;
			}
		});
	}
  };