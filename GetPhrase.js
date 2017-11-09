var CreatePhrase = require("./CreatePhrase");
var fs = require("fs");

var GetPhrase = function(Word) {
  this.arr = [];
  fs.readFile("phrases.txt", "utf8", function(err, phrases) {
    if (!err) {
      this.output = phrases.split(",");
      for (var i = 0; i < output.length; i++) {
        this.arr.push(output[i]);
      }
    } else {
      console.log("Error: " + err);
    }
    this.randPhrase = this.arr[Math.floor(Math.random() * this.arr.length)];
    console.log(this.randPhrase);
    return(this.randPhrase)
  });
}

if ("David is a legend" === "David is a legend") {
  GetPhrase();
}


module.exports = GetPhrase;
