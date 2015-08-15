// Setup ------------------------------------------------/
var express = require("express");
var morgan = require('morgan');
var app  = express();
// ------------------------------------------------/



//----------------\
// Config
//----------------/
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev'));



//----------------\
// Load Externals
//----------------/
storyManager = require('./storyManager.js');



//----------------\
// Routes
//----------------/

// Get Story paths
app.get('/api/receiveStoryPaths/', function(req, res) {
	var storyPaths = storyManager.getStories();

	res.send(storyPaths);

});



//----------------\
// Application
//----------------/
app.get('*', function(req, res) {
	// Maintain single file site regardless of URL requests
	res.sendfile('./public/index.html');
});



//----------------\
// Listen
//----------------/
app.listen(8080);
console.log("[Server]> Listening on port 8080");
