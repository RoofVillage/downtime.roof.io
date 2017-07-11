
// Initialize requirements
var config = require('./config');
var express = require('express');

// Initialize variables
var path = 'public/';

// Run Server: runs all server tasks
var runServer = function () {

	// Setup server
	var server = express();
	server.listen(config.port, config.IPAddress, function () {
	    console.log('Roof app served on '+config.IPAddress+':'+config.port+'...');
	});

	// Start Express static
	server.use(express.static(path));

	// Serve index.html
	server.get('*', function (req, res) {
	    res.sendFile(path + 'index.html', {"root": "."});
	});
}

// Run server
runServer();
