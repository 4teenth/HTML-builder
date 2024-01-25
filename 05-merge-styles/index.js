/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');

const fromDir = './05-merge-styles/styles/';
const toDir = './05-merge-styles/styles/';

fs.mkdir(toDir, { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    // Read the 'styles' folder.
    fs.readdir(fromDir, (err, files) => {
      if (err) {
        console.error(err);
        return;
      } else {
        files.forEach((file) => {
          fs.stat(path.join(fromDir, file), (err, stats) => {
            if (err) {
              console.error(err);
              return;
            }
            if (stats.isFile() && path.extname(file) === '.css') {
              console.log(file);
              fs.readFile(path.join(fromDir, file), 'utf-8', (err, data) => {
                if (err) throw err; // Alt: if (err) {cl/ce(err); \n return}
                console.log(data);
              });
            }
          });
        });
      }
    });
  }
});
