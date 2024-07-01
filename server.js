const fs = require('fs');
const path= require('path');

const data = fs.readFileSync('index.html', 'utf8');

const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/index') {
        res.write(data);
        res.end();
    }
    else if (req.url === '/login') {
        res.write('<html><head><title>Login Page</title></head>');
        res.write('<body><h1>Login Page</h1></body></html>');
    }else{
        res.write('<html><head><title> node js class </title></head>');
        res.write('<body><h1> Welcome to node js class </h1></body></html>');
    }
    res.end();

})

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
