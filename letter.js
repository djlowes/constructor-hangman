
//SuperClass
var Letter = function(character) {
	this.character = character;
	this.show = false;
	if (this.character == ' ')
		this.show = true;
}

//Sub1: Makes letters visible from "_"
Letter.prototype.showy = function() {
	if (this.show) {
		return this.character;
	}
	return "_ ";
}

module.exports = Letter;
