console.log("Rock, Paper, Scissors Game!");
// Score:
let humanScore = 0;
let computerScore = 0;



//Computer Choice:
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

//Play Round:
  function playRound(humanChoice, computerChoice) {
    const options = ["Rock", "Paper", "Scissors"];
    if (humanChoice === computerChoice) {
      return "Tie";
    } else if ((
        (humanChoice === options[0] && computerChoice === options[2]) ||
        (humanChoice === options[1] && computerChoice === options[0]) ||
        (humanChoice === options[2] && computerChoice === options[1])
      )) {
      humanScore++;
      return "Player Wins!";
    } else {
      computerScore++;
      return "Computer Wins!";
    }
  }

  //Event Listeners:
  document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
  document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
  document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));

  //Play Game:
  function playGame(humanChoice) {
      
      const computerChoice = getComputerChoice();
      document.getElementById("humanChoice").textContent = "You chose: " + humanChoice;
      document.getElementById("computerChoice").textContent = "Computer chose: " + computerChoice;
        
      const roundResult = playRound(humanChoice, computerChoice);
      document.getElementById("roundResult").textContent = roundResult;
      
      document.getElementById("score").textContent = "The score is: You " + humanScore + " to Computer " + computerScore;

      if (humanScore === 5) {
        document.getElementById("finalScore").textContent = "You win the game!";
        document.getElementById("refreshMessage").textContent = "Refresh to play again!";
    } else if (computerScore === 5) {
        document.getElementById("finalScore").textContent = "Computer wins the game!";
        document.getElementById("refreshMessage").textContent = "Refresh to play again!";
    } else {
        document.getElementById("finalScore").textContent = "";
    }
  }

  

  