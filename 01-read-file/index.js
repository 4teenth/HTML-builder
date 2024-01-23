/* eslint-disable prettier/prettier */
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join('./01-read-file', 'text.txt');

const stream = fs.createReadStream(filePath, 'utf8');

stream.on('data', (chunk) => {
  console.log(chunk);
});

//* Alt
// const fs = require('fs');
// let data = '';
// // Create a readable stream
// const readerStream = fs.createReadStream('./01-read-file/text.txt');
// // Set the encoding to be utf8.
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function (chunk) {
//   data += chunk;
// });

// readerStream.on('end', function () {
//   console.log(data);
// });

// readerStream.on('error', function (err) {
//   console.log(err.stack);
// });

//! Without ReadStream
// const fs = require('fs').promises;
// fs.readFile('./01-read-file/text.txt', 'utf8')
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log(err.message));
// ---
// const fs = require('fs');
// function readFile() {
//   fs.readFile('./01-read-file/text.txt', 'utf8', (err, data) => {
//     if (err) throw err;

//     console.log(data);
//   });
// }
// readFile();
