console.log("Rock, Paper, Scissors Game!");
// Score:
let humanScore = 0;
let computerScore = 0;

// Human Choice:
function getHumanChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return options[0];
    } else if (humanChoice === "paper") {
        return options[1];
    } else if (humanChoice === "scissors") {
        return options[2];
    } else {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return getHumanChoice()
    }
  }


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

  

  //Play Game:
  function playGame() {
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      console.log("You chose:", humanChoice);
        
      const computerChoice = getComputerChoice();
      console.log("Computer chose:", computerChoice);
        
      const roundResult = playRound(humanChoice, computerChoice);
      console.log(roundResult); 
      
      console.log("The score is: ", humanScore, "to", computerScore);

      
    }
    console.log("The Final Score is:");
    console.log("You:", humanScore, "Computer:", computerScore);
    console.log("Refresh to play again!");
  }

  

  playGame();