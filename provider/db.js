var async = require('async');
var AWS = require('aws-sdk');
var fs = require('fs');

var config = fs.readFileSync('./db_config.json', 'utf8');
config = JSON.parse(config);

AWS.config.update({
	region : config.region,
	endpoint : config.endpoint,
	accessKeyId : config.accessKeyId,
	secretAccessKey : config.secretAccessKey
});

var dynamodb = new AWS.DynamoDB();

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
	getAll: function () {
		var params = {
			TableName : "customers"
		};
		docClient.scan(params, function(error, data){
			if(error){
				return error;
			}else{
				return data.Items;
			}
		});
	}
  };

