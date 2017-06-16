console.log('In server.js');

// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/index');



// uses
app.use = express.static('public');
app.use = bodyParser.urlencoded({
	extended: true
});
app.use = ;


// globals
var port = process.env.PORT || 3355;


// spin up server
app.listen(port, function() {
	console.log('server up on:', port);
});
