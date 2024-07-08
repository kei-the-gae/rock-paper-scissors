// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

/*-------------------------------- Constants --------------------------------*/

const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector("#result-display");
// console.dir(resultDisplayEl);

/*-------------------------------- Functions --------------------------------*/

const getPlayerChoice = (event) => {
    // console.log("getPlayerChoice: ", event);
    playerChoice = event.target.id;
};

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
};

const compare = () => {
    if (playerChoice === computerChoice) {
        msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
        // "rock" vs. "scissors"
        msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
        // "paper" vs. "rock"
        msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
        // "scissors" vs. "paper"
        msg = 'Congrats! You win!';
    } else {
        msg = 'You lose! Try again?';
    };
};

const play = (event) => {
    // console.log(event.target);
    getPlayerChoice(event);
    console.log(playerChoice);
    getComputerChoice();
    console.log(computerChoice);
    compare();
    console.log(msg);
};

/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector("#rock").addEventListener("click", play);
// document.querySelector("#paper").addEventListener("click", play);
// document.querySelector("#scissors").addEventListener("click", play);
// DRY
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", play);
});
