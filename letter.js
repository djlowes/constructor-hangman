var Letter = function(character) {
	this.character = character;
	this.show = false;
	if (this.character == ' ')
		this.show = true;
}

letter.prototype.printInfo = function() {
	if (this.show) {
		return this.character;
	}
	return "_ ";
}
