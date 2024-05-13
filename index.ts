#!/usr/bin/en                                                                                                                                                 v node

import inquirer from "inquirer"
// computer generate a random number
//user willguess the number input by user
//compair user number and computer random number
const randomNumber = Math.floor(Math.random()*6+1);


const answers = await inquirer.prompt([
   { name:"userGuessedNumber",
    type:"number",
    message:"Please Guess a number between:1-10 ",
},
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("congratulation!you are winner.");
}else{
    console.log("sorry!your guess get wrong.");
}