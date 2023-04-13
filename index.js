let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return document.getElementById("computerChoice").innerHTML = `Computer chose: ${choice}!`;
}

console.log(getComputerChoice());