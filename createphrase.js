var fs = require("fs");


var CreatePhrase = function(word) {
  word = process.argv.slice(2).join(" ");
  fs.appendFile('phrases.txt', word + ", ", function(err) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("New phrase added")
    }
  })
}

if (process.argv[2]) {
  CreatePhrase();
}

module.exports = CreatePhrase;
