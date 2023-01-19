var http = require("http");
const fs = require("fs")
http.createServer(function (request, response) {
    if(request.method=='GET'&&request.url=="/"||request.url=="/index.html"){
        response.writeHead( 200,{'Content-Type': 'text/html'});
        fs.readFile('index.html', function (err, data) {
            if (err) {
               return console.error(err);
            }
            response.end(data.toString());
         });
    }
    else if(request.method=='GET'&&request.url=="/about"||request.url=="/about.html"){
        fs.readFile('about.html', function (err, data) {
            if (err) {
               return console.error(err);
            }
            response.end(data.toString());
         });
    }
    else if(request.method=='GET'&&request.url=="/contact"||request.url=="/contact.html"){
        fs.readFile('contact.html', function (err, data) {
            if (err) {
               return console.error(err);
            }
            response.end(data.toString());
         });
    
    }
 else if (request.url === "/style.css") {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    fs.readFile('style.css', function (err, data) {
        if (err) {
            return console.error(err);
        }
        response.end(data);
    });
}
 else if (request.url === "/nodejs.png") {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    fs.readFile('590px-Node.js_logo.svg.png', function (err, data) {
        if (err) {
            return console.error(err);
        }
        response.end(data);
    });
}
    else{
        response.statusCode=404
        response.end('<h1>404</h1>\n');
    }
 }).listen(3000);
 
 console.log('Server running at http://127.0.0.1:3000/')
 