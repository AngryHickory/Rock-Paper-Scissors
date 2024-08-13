console.log("Rock, Paper, Scissors Game!");

const humanScore = 0;
const computerScore = 0;

function getHumanChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return options[0];
    } else if (humanChoice === "paper") {
        return options[1];
    } else if (humanChoice === "scissors") {
        return options[2];
    }
    return humanChoice;
  }
  const humanChoice = getHumanChoice();
  console.log(humanChoice);

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      return "Rock";
    } else if (computerChoice === 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }

  const computerChoice = getComputerChoice();
  console.log("Computer chose:", computerChoice);
