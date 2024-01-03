function onRock()                   // Declares a function that acts when the Rock button is clicked
{
    alert("You selected Rock");     //
};

function onPaper()                  // Declares a function that acts when the Paper button is clicked
{
    alert("You selected Paper");    //
};

function onScissors()               // Declares a function that acts when the Scissors button is clicked
{
    alert("You selected Scissors"); //
};

const btnRock = document.getElementById('btn-rock')         // Returns the proper button's function when button is clicked, listens for click event
btnRock.addEventListener('click', () => onRock());          //

const btnPaper = document.getElementById('btn-paper')       //Returns the proper button's function when button is clicked, listens for click event
btnPaper.addEventListener('click', () => onPaper());        //

const btnScissors = document.getElementById('btn-scissors') //Returns the proper button's function when button is clicked, listens for click event
btnScissors.addEventListener('click', () => onScissors());  //