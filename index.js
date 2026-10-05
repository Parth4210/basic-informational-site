const http = require('http');
const fs = require('fs');

let filename;
let statusCode = 200;

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        filename = 'index.html'
    }
    else if (req.url == '/about') {
        filename = 'about.html'
    }
    else if (req.url == '/contact') {
        filename = 'contact-me.html'
    }
    else {
        filename = '404.html'
        statusCode = 404
    }
    fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error');
                return;
            }
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end(data);
        });

}).listen(8080);