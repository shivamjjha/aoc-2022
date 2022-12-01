const fs = require('fs');
const path = require('path');

function read(fileName) {
  return fs.readFileSync(path.join(__dirname, fileName), 'utf-8')
}

function getArray(fileName) {
  return read(fileName)
    .split('\n')
    .map(item => item.trim()); // tabs are added while copying text input string from browser 
}

module.exports.read = read
module.exports.getArray = getArray