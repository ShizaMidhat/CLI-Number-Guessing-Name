#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome In CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guess Number(Number Limit From 1 to 5",

    },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("CONGRATULATION! YOU GUESS A CORRECT NUMBER");
}
else{
    console.log("Sorry,you guess a wrong number");
}