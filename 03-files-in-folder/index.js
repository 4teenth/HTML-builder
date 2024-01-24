/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');

const folderPath = path.dirname('03-files-in-folder/secret-folder/index.js');
// const folderPath = './03-files-in-folder/secret-folder';

// Read the files
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    // Get the file name from obj
    //   const fileName = path.basename(file, '.csv');
    const fileName = path.parse(file).name;
    // Get the file extension from obj
    //   const fileExtension = path.extname(file);
    const fileExtension = path.parse(file).ext;
    console.log(`${fileName} - ${fileExtension} - File Size`);
  });
});
