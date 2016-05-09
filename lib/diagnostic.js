// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');
let inFile = process.argv[2];

const sumLines = function(filename, callback) = {

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
  if (error) {
    console.error(error);
  }

  let lines = content.split('\n');

  lines.pop();

  lines.reduce( (prev, curr) => prev + curr );

  // console.log(sumLines);
  });

};

module.exports = {
  sumLines,
};


// const sumLines = function(filename, callback) {
//
//   filename = fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
//     if (error) {
//     console.error(error);
//     }
//
//     let lines = content.split('\n');
//     console.log(lines);
//     lines.pop();
//     console.log(lines);
//     lines.reduce( (prev, curr) => prev + curr );
//
//     console.log(lines);
//
// });
// };
