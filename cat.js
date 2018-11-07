const fs = require('fs');

module.exports = function(file) {
    fs.readFile(file, 'utf8', function(err, contents) {
        process.stdout.write(contents);
    });
    process.stdout.write('\nprompt > ');
};

// let path = require('path');
// console.log(path.basename());
