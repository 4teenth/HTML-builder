/* eslint-disable prettier/prettier */
const fs = require('fs');

const fromDir = './04-copy-directory/files/';
const toDir = './04-copy-directory/files-copy'; // this path without nested catalog structure, so later when copy smth to this dir do not forget about path separator

// Create a folder 'files-copy' from path of toDir variable if it does not exist
fs.mkdir(toDir, { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    // Read the contents of the 'files' folder.
    fs.readdir(fromDir, (err, files) => {
      if (err) {
        console.error(err);
        return; //---
      } else {
        //* Alt to classic for of loop
        files.forEach((file) => {
          fs.copyFile(fromDir + file, toDir + '/' + file, (err) => {
            err ? console.log(err) : console.log(file + ' - file was created');
          });
        });
      }
    });
  }
});
