var rpsList = ["ROCK", "PAPER", "SCISSORS"]
var computerChoice;
var playerChoice;
var computerScore = 0;
var playerScore = 0;

function getComputerChoice()
{
    computerChoice = rpsList[Math.floor(Math.random()*3)];
    return computerChoice;
}

function getPlayerChoice()
{
    playerChoice = prompt("What will you play? ").toUpperCase();
    return playerChoice;
}

function playRound()
{
    if (computerChoice == playerChoice)
    {
        alert("It's a tie! Try again");
    }

    if (computerChoice == "PAPER" && playerChoice == "SCISSORS" || computerChoice == "SCISSORS" && playerChoice == "ROCK" || computerChoice == "ROCK" && playerChoice == "PAPER")
    {
        alert("You win! Nice!");
        playerScore +=1;
        return playerScore;
    }

    if (computerChoice == "PAPER" && playerChoice == "ROCK" || computerChoice == "SCISSORS" && playerChoice == "PAPER" || computerChoice == "ROCK" && playerChoice == "SCISSORS")
    {

        alert("You lose! Try again!")
        computerScore += 1;
        return computerScore;

    }
}
do
{
    playRound(getComputerChoice(), getPlayerChoice());
}
while(playerScore < 5 && computerScore < 5);

console.log("Computer's Score: " + computerScore);
console.log("Player's score: " + playerScore);