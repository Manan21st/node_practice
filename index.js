const fs = require('fs');

// Read from the file
fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log('File content:', data);

    const newContent = 'OverWritten content';
    fs.writeFile('file.txt', newContent, 'utf8', () => {
        console.log('File has been written.');
    });
});
