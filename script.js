// Step 2: Get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 3: Get the human's choice
function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();

  // Validate input
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid input. Please choose rock, paper, or scissors:").toLowerCase();
  }

  return choice;
}

// Step 4: Declare score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();  // Make it case-insensitive

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
  }

  console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}

// Step 6: Play the entire game (5 rounds)
function playGame() {
  // Reset scores
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  // Announce the overall winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! The computer won the game.");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();
