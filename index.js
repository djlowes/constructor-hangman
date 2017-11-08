var inquirer = require('inquirer');
var CreatePhrase = require("./CreatePhrase");


if (process.argv[2] == "admin" && !process.argv[3]) {
  console.log("-------------------------------------------------------" + '\n' + '\n' + "HELLO ADMIN!" + '\n' + "To add a new phrase, please type in 'index.js phrase [new phrase]'" + '\n' + "To view the existing list of phrases, please type in 'index.js phrase list'" + '\n' + '\n'+ "-------------------------------------------------------")
}

if ()
//   inquirer.prompt([{
//       type: 'confirm',
//       name: 'toAddPhrase',
//       message: 'Would you like to add a new phrase?',
//       default: false,
//     },
//     // {
//     //   type: 'input',
//     //   name: 'newPhrase',
//     //   message: 'Please type the phrase',
//     //   validate: new CreatePhrase(value)
//     // },
//     // {
//     //   type: 'confirm',
//     //   name: 'toSeeList',
//     //   message: 'Would you like to see the phrase list?',
//     //   default: false,
//     // }
//   ]).then(function(answers) {
//     console.log(answers)
//   });
// }
