var GetPhrase = require("./GetPhrase");

var LetterLogic = function() {
  this.phrase = GetPhrase();
  console.log(this.phrase)
  // for(var i=0; i<GetPhrase.length; i++) {
  //   console.log([i])
  //   console.log("is anything happening")
  // }
}

if (process.argv[1]) {
  LetterLogic();
}


module.exports = LetterLogic;
