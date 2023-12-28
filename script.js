function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    console.log(number);
    let choiceList = ["Rock", "Paper", "Scissors"];
    let choice = choiceList[number];
    console.log(choice);
    return choice;
}
getComputerChoice();