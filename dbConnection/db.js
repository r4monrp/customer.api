var AWS = require('aws-sdk');

AWS.config.update({
	region : process.env.REGION,
	endpoint : process.env.ENDPOINT,
	accessKeyId : process.env.ACCESSKEYID,
	secretAccessKey : process.env.SECRETACCESSKEY
});

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;


