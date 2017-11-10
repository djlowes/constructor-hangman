var Letter = require("./letter");

var Word = function(value){
	this.value = value;
	this.letters = [];
	this.numberGuesses = "";
	for(var i=0; i<this.value.length; i++) {
		this.letters.push(new Letter(this.value[i]));
	}
};

Word.prototype.showyWhenComplete = function(){
	for(var i=0; i<this.letters.length; i++){
		if(!this.letters[i].show) return false;
	}
	return true;
}

Word.prototype.present = function(userInput){
	if (this.numberGuesses.indexOf(userInput) != -1) {
		return "You have entered this letter already";
	}
	this.numberGuesses += userInput;
	for(var i=0; i<this.letters.length; i++){
		if (this.letters[i].value == userInput){
		this.letters[i].show = true;
		}
	}
};

Word.prototype.fuckingWork = function(){
  var visible = "";
  for(var i=0; i<this.letters.length; i++){
    visible += this.letters[i].showy();
  }
  return visible;
}

module.exports = Word;
