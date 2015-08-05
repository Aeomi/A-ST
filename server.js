'use strict';

var http = require('http');


var server = http.createServer(function(request, response) {
    var method = request.method;
    var url    = request.url;

    response.writeHead(200, {
        'content-type' : 'text/html'
    });


    response.write("Ello Wurld");
    response.end();
});


server.listen(3000);

??? ;3;
