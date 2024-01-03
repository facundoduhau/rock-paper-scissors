var rpsList = ["ROCK", "PAPER", "SCISSORS"]
var computerSelection;
var playerSelection;
var computerScore = 0;
var playerScore = 0;
var winner;

function getComputerChoice()                                     // Selects random item from rpsList
{
    computerSelection = rpsList[(Math.floor(Math.random()*3))];  // Random 1-3 number gen
    console.log("Computer's choice was: " + computerSelection);                              // Logs computerSelection
};

function onRock()                   // Declares a function that acts when the Rock button is clicked
{
    playerSelection = "ROCK"
    console.log("You chose: " + playerSelection);
    evaluate();
};

function onPaper()                  // Declares a function that acts when the Paper button is clicked
{
    playerSelection = "PAPER"
    console.log("You chose: " + playerSelection);
    evaluate();
};

function onScissors()               // Declares a function that acts when the Scissors button is clicked
{
    playerSelection = "SCISSORS"
    console.log("You chose: " + playerSelection);
    evaluate();
};

const end = document.getElementById('end')


const btnRock = document.getElementById('btn-rock');        // Returns the proper button's function when button is clicked, listens for click event
btnRock.addEventListener('click', () => onRock());          //

const btnPaper = document.getElementById('btn-paper');      // Returns the proper button's function when button is clicked, listens for click event
btnPaper.addEventListener('click', () => onPaper());        //

const btnScissors = document.getElementById('btn-scissors'); // Returns the proper button's function when button is clicked, listens for click event
btnScissors.addEventListener('click', () => onScissors());   //

document.getElementById('player').innerHTML = "Player Score: " + playerScore;       // Prints Player score
document.getElementById('computer').innerHTML = "Computer Score: " + computerScore; // Prints Computer score

function evaluate()
{
    getComputerChoice();

    if (playerSelection == computerSelection)
    {
        document.getElementById('text').innerHTML = "Tie! Choose another move!"
    };

    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER")
    {
        document.getElementById('text').innerHTML = "You win! Choose another move!"
        playerScore += 1;
        if (playerScore < 5)
        {
            document.getElementById('player').innerHTML = "Player Score: " + playerScore; 
        }
        else
        {
            document.getElementById('player').innerHTML = "Player Wins 🏆"
            document.getElementById('computer').innerHTML = "Computer Loses 👎"
            document.getElementById('text').innerHTML = "You won the game!"
            btnScissors.remove();
            btnRock.remove();
            btnPaper.remove();
            createBtn();


        }
    }
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        document.getElementById('text').innerHTML = "You lose! Choose another move"
        computerScore += 1;
        if (computerScore < 5)
        {
            document.getElementById('computer').innerHTML = "Computer Score: " + computerScore; 
        }
        else
        {
            document.getElementById('player').innerHTML = "Player Loses 👎"
            document.getElementById('computer').innerHTML = "Computer Wins 🏆"
            document.getElementById('text').innerHTML = "You lost the game!"
            btnScissors.remove();
            btnRock.remove();
            btnPaper.remove();
            createBtn();
   
        }
    }

}

endPlace = document.getElementById('end');

function createBtn()
{
    const endBtn = document.createElement('button');
    endBtn.className = "end";
    endBtn.id = 'endBtn';
    endBtn.innerText = 'Play Again!'
    endPlace.appendChild(endBtn);
    div.style.color = 'white';
}
    const endButton = document.querySelector('#end')
    endButton.addEventListener('click', () => window.location.reload())

