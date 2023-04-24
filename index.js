const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const playerTotal = document.getElementById("playerTotal");
const computerTotal = document.getElementById("computerTotal");
const btns = document.querySelectorAll('.choices button');
const resultsText = document.getElementById("results");
const computerSelection = getComputerChoice();


// Computer choice from the choices array
function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase();
}

// Compare player's choice against the computers choice to provide result in console
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return resultsText.innerText = `You win! Computer chose ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return resultsText.innerText = `You win! Computer chose ${computerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return resultsText.innerText = `You win! Computer chose ${computerSelection}`;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return resultsText.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return resultsText.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return resultsText.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return resultsText.innerText = `Tie! Computer also chose ${computerSelection}.`;
    }
}

// Provide updates of the scores
function checkScore() {
    playerTotal.innerText = `Player Score: ${playerScore}`;
    computerTotal.innerText = `Computer Score: ${computerScore}`;
    determineWinner();
}

// Return final results of all 5 rounds
function determineWinner() {
    let winnerBanner = document.createElement("h2");
    winnerBanner.setAttribute("id", "winnerBanner");
    let bannerText;
    let playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playButton");
    let playButtonText = document.createTextNode("Play again?");
    playAgain.appendChild(playButtonText);
    
    
    
    const resultsDiv = document.getElementById("resultsDiv")
    if (playerScore === 5) {
        bannerText = document.createTextNode("You win!");
        winnerBanner.appendChild(bannerText);
        resultsDiv.appendChild(winnerBanner);
        resultsDiv.appendChild(playAgain)
        let playButton = document.getElementById("playButton");
        playButton.addEventListener('click', ()=> {
            clearScores();
        })
        btns.forEach(button => {
            button.style.display = 'none'
        })
        resultsText.innerText = "";

    }
    else if (computerScore === 5){
        bannerText = document.createTextNode("Computer won..")
        winnerBanner.appendChild(bannerText);
        resultsDiv.appendChild(winnerBanner);
        resultsDiv.appendChild(playAgain)
        let playButton = document.getElementById("playButton");
        playButton.addEventListener('click', ()=> {
            clearScores();
        })
        btns.forEach(button => {
            button.style.display = 'none'
        })
        resultsText.innerText = "";
        document.body.classList.toggle("computerWins")
    }
}


function clearScores() {
    let winnerBanner = document.getElementById("winnerBanner")
    let playButton = document.getElementById("playButton");
    playerScore = 0;
    computerScore = 0;
    playerTotal.innerText = `Player Score: ${playerScore}`;
    computerTotal.innerText = `Computer Score: ${computerScore}`;  
    winnerBanner.remove();
    playButton.remove();
    btns.forEach(button => {
        button.style.display = ""
    })
}


// Loop for all buttons

for (i of btns) {
    i.addEventListener('click', (e)=> {
        const userChoice = e.target.id;
        const computerOutput = getComputerChoice();
        console.log(userChoice);
        playRound(userChoice, computerOutput);
        checkScore();
        
    })
}

let typed = new Typed(".auto-type", {
    strings: ["Rock Paper Scissors"],
    typeSpeed: 150,
    loop: false,
    showCursor: false
})



