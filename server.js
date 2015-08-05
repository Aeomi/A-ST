
var express = require("express");
var app  = express();

app.use(express.static(__dirname + "/public"));
app.get('/', function(req, res) {

    console.log("An action was commited");
    console.log("[Client/Request]> ("+ req.ip +") " + req.method);

});


app.listen(8080);
console.log("[Server]> Listening on port 8080");


var fs = require('fs');

fs.readdir("data/stories/mog/", function(err, files) {
    for (var file in files) {
        console.log(files[file]);
    }
});
