console.log("Hello World");


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
  console.log(computerChoice);