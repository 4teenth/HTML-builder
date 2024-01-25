/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');

const fromDir = './05-merge-styles/styles/';
const toDir = './05-merge-styles/project-dist/';

let totalStylesData = [];

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
              //   console.log(file); // check all needed files are .css files
              fs.readFile(path.join(fromDir, file), 'utf-8', (err, data) => {
                if (err) throw err; // Alt: if (err) {cl/ce(err); \n return}
                totalStylesData.push(data);
                // console.log(totalStylesData); // ARRAYS of STYLES
                // (totalStylesData.length === files.length) // false, cuz 3 Arrays from .css files, but 4 files in current folder (includes style.txt)
                fs.writeFile(
                  'bundle.css',
                  totalStylesData.join('\n'),
                  'utf-8',
                  (err) => {
                    if (err) throw err;
                    // console.log('The bundle.css file has been saved.');
                  },
                );
              });
            }
          });
        });
      }
    });
    console.log('The bundle.css file has been saved.');
  }
});
fs.copyFile('bundle.css', toDir + 'bundle.css', (err) => {
  err ? console.log(err) : console.log(' - file was created');
});
