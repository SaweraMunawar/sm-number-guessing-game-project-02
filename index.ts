#! /usr/bin/env node

import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
// computer will generate a random number
const randomNumber = Math.floor( Math.random()*10 +1);
// console.log(randomNumber);

// User input for guessing the number
const answers = await inquirer.prompt([
    {
    name: " UserGuessedNumber",
    type: "number",
    message: "Please enter a guess number",
    }
])
console.log(answers);

// Compare user input with computer generate random number and show result
if (answers.UserGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed the correct number.");
} else {
    console.log("Sorry, but you guessed wrong. The correct number was " + randomNumber + ".");
}