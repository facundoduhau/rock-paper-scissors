function getComputerChoice() // function to generate the computers choice, inside the given items of the array
{
    let number = Math.floor(Math.random()*3);
    console.log(number);
    let choiceList = ["ROCK", "PAPER", "SCISSORS"];
    let choice = choiceList[number];
    return choice;
}

function playerChoice() // function to prompt the user for a choice
{
        let playerChoice = prompt("What will you play? ").toUpperCase();
        return playerChoice;
}

var choice = getComputerChoice();   // Get the values returned by the functions
var playerChoice = playerChoice();  //

console.log(choice); // show the results
console.log(playerChoice);