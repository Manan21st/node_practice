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
