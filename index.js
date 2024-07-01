const fs = require('fs');

// Read from the file
// fs.readFileSync('file.txt', 'utf8', (err, data) => {
//     console.log('File content:', data);
// });
// fs.writeFileSync('file.txt', 'OverWritten content', 'utf8', () => {
//     console.log('File has been written.');
// });
// fs.appendFileSync('file.txt', " class is going on", 'utf8', ()=> {
//     console.log('File has been appended.');
// });

// fs.mkdir('directory1',(err) => {
//     if(err) {
//         console.log('Error:', err);
//     } else {
//         console.log('Directory created successfully.');
//     }
// });

//fs.rmdir('directory1', (err) => {
//     if(err) {
//         console.log('Error:', err);
//     } else {
//         console.log('Directory deleted successfully.');
//     }
// });

// fs.rename('new-file.txt', 'file.txt', (err) => {
//     if(err) {
//         console.log('Error:', err);
//     } else {
//         console.log('File renamed successfully.');
//     }
// });


const path = require('path');
const p = '/Users/Manan Agrawal/Documents/Scaler Codes/Trimester 4/node_practice/file.txt';

const dirname = path.dirname(p);
const extension = path.extname(p);

console.log('directory name : ',dirname);
console.log('extension name : ',extension);


const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/index') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            res.write(data);
            res.end();
        });
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


