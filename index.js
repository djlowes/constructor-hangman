var inquirer = require('inquirer');
// var GetPhrase = require("./GetPhrase");
var Letter = require("./letter.js");
var Word = require("./word.js");
var ActualWord = require("./list.js");

var maxGuesses = 12;
var gameWord = new Word(ActualWord);
// gameWord.setty();
// gameWord.present();
 console.log(gameWord)
// console.log(typeof gameWord)

function gameTime() {
  if (gameWord.numberGuesses.length >= maxGuesses) {
    console.log('You have used up all your guesses. Game Over.');
    return; //Game over
  }
  inquirer.prompt([{
    name: 'letter',
    type: 'text',
    message: 'Enter a letter:',
    validate: function(value) {
      // Currently not correct validation
      if(value.length == 1) {
        return true
      }
    }
  }]).then(function(typeLetter) {
    var letter = typeLetter.letter;
    gameWord.present(letter);
    if (gameWord.setty()) {
      console.log("Correct");
      return;
    }
    console.log("You have " + (maxGuesses - gameWord.numberGuesses.length) + " guesses left.")
    gameTime();
  });
}

gameTime();
