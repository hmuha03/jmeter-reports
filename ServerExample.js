var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is Test Message.");  
            response.end();  
            break;  
        default:  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                	/*
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    */
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
    }  
});  
server.listen(process.env.PORT || 3000);

/*
var express    = require('express')
var serveIndex = require('serve-index')

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/ftp', express.static('public/ftp'), serveIndex('public/ftp', {'icons': true}))

// Listen
app.listen(process.env.PORT || 3000);
*/