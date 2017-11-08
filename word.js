var Letter = require("./Letter");

//SuperClass
function Word(value){
	this.value = value;
	this.letters = [];
	this.numberGuesses = "";
	for(let i=0; i<this.value.length; i++) {
		this.letters.push(new Letter(this.value[i]));
	}
};

//Sub1: Guess logic
Word.prototype.guessy = function(){
	for(let i 0; i<this.letters.length; i++){
		if(!this.letters[i].show) return false;
	}
	return true;
}

//Sub2: Guess logic for multiple letter guess & validating correct response
Word.prototype.findy = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.numberGuesses.indexOf(lowerLetter) != -1) {
		return "You have entered this letter already";
	}
	this.numberGuesses += lowerLetter;
	for(let i=0; i<this.letters.length; i++){
		if (this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

//Sub3: Show letter on correct guess
Word.prototype.looky = function(){
  var visible = "";
  for(let i=0; i<this.letters.length; i++){
    visible += this.letters[i].showy();
  }
  return visible;
}

module.exports = Word;
