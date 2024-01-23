/* eslint-disable prettier/prettier */
// const fs = require('node:fs');

// function fileHandler() {
//   fs.open('./02-write-file/text.txt', 'w', (err) => {
//     if (err) throw err;
//     console.log('Text file was created!');
//   });
// }
// fileHandler();

const fs = require('node:fs');

const readline = require('node:readline');

// Create an interface for the input and output(1st argument for the standard input, 2nd for reading the standard output)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a file and ask a file name
// rl.question('Name the new added file: ', (fileName) => {
//   const writableStream = fs.createWriteStream(
//     `./02-write-file/${fileName}.txt`,
//     {
//       flags: 'a',
//     },
//   );
// Just create a file
const writableStream = fs.createWriteStream('./02-write-file/text.txt', {
  flags: 'a',
});
// Define a function that prompts the user add some text to the file
const askText = () => {
  rl.question('Add some text to the file, please: ', (text) => {
    if (text.toLowerCase() === 'exit') {
      console.log('Data recieved..! Have a nice day!');
      // Close rl interface and end/close the stream
      rl.close();
      writableStream.end(); // optional
    } else {
      // Add the text to the file, +breakline
      writableStream.write(text + '\n', (err) => {
        if (err) {
          // Handle the error
          console.error(err);
        } else {
          console.log('Text was added successfully');
        }
        askText();
      });
    }
  });
};
rl.on('SIGINT', () => {
  rl.close();
  // writableStream.end();
  console.log('\nData recieved..! Have a nice day!');
});

askText();
