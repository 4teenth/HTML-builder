/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');
// console.log(res);
// console.log(__dirname);
//* Alt
// const folderPath = path.dirname('03-files-in-folder/secret-folder/index.js'); // path.dirname() ignores the trailing directory.
// const folderPath = './03-files-in-folder/secret-folder';

// const filePath = path.join(__dirname, 'secret-folder/data.csv');
// const fileInfo = fs.statSync(filePath);
// console.log(fileInfo);

// Read the files
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  //   const targetFiles = fs.readdirSync(folderPath);
  //   console.log(targetFiles); // array of files in the path above(works only with Sync)
  files.forEach((file) => {
    // Get the file name from obj
    //   const fileName = path.basename(file, '.csv');
    const fileName = path.parse(file).name;
    // Get the file extension from obj
    //   const fileExtension = path.extname(file);
    const fileExtension = path.parse(file).ext;
    // Get the file size
    fs.stat(path.join(folderPath, file), (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      if (stats.isFile()) {
        const fileSize = stats.size; // Size in bytes
        console.log(
          `${fileName} - ${fileExtension.slice(1, fileExtension.length)} - ${
            fileSize / 1000
          } Kb`,
        );
      }
    });
  });
});
