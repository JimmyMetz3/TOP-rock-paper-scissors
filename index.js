let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;


// Computer choice from the choices array
function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase();
}

// Compare player's choice against the computers choice to provide result in console
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return console.log(`You win! Computer chose ${computerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return console.log(`You win! Computer chose ${computerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return console.log(`You win! Computer chose ${computerSelection}`);
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        computerScore++;
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

// Provide updates of the scores
function checkScore() {
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

// Return final results of all 5 rounds
function determineWinner() {
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore){
        console.log("You lost to the computer :(");
    }
     else {
        console.log("Wow. A tie.");
    }
}

// Run 5 rounds making a full game
function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Select "Rock", "Paper", or "Scissors".').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        checkScore();
    }
    determineWinner();
}


game();

