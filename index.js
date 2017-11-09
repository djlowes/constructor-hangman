var inquirer = require('inquirer');
var GetPhrase = require("./GetPhrase");
var Letter = require("./Letter");
var Word = require("./Word");

var maxGuesses = 12;
var starterWord = new Word(GetPhrase).toString();
var gameWord = new Word(starterWord.substring(starterWord.lastIndexOf("}") + 1));
console.log(gameWord)

//maxGuess Var to decrement

//get random word from getphrase to initiate game

//start game function
  //if MyGuesses > maxGuess then = loss [playAgain option in inquirer]
  //else keepGuessing
//init inquirer
 //"enter a letter"
 //validate with function > need to check that a letter has been inputed
//then init game control
  //if win() - console.log win message
  //if incomplete, recursive call to keep playing
  //if loss

  //need to console.log guessVAR on decrement after each guess *****

  // function gameTime(){
  // 	if (gameWord.numberGuesses.length >= maxGuesses){
  // 		console.log('You have used up all your guesses. Game Over.');
  // 	return; //Game over
  // 	}
  // 	inquirer.prompt([{
  // 		name: 'letter',
  // 		type: 'text',
  // 		message: 'Enter a letter:',
  // 		validate: function(str){
  // //			if (str.length != 1) return false;
  // 				}
  // 		}]).then(function(typeLetter){ //Game control
  // 				var letter = typeLetter.Letter;
  // 				gameWord.findy(letter); //Check
  // 					if(gameWord.guessy()){
  // 					console.log("You got it!");
  // 					return;
  // 					}
  // 				console.log("You have " + (maxGuesses - gameWord.guessesMade.length) + " guesses left.")
  // 				gameTime();
  // 				}
  //   );
  // }
  //
  // gameTime();
