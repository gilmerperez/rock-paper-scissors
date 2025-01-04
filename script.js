// Counts stats for user
let userStats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Counts stats for computer
let computerStats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Asks the user if they want to play
let wantsToPlay = confirm("Do you want to play Rock Paper Scissors?");
if (wantsToPlay) {
  // Start the game if they agree
  rockPaperScissorsGame();
} else {
  // Alerts them if they decline
  alert("See you next time!");
}

function rockPaperScissorsGame() {
  // Asks the user to chose R, P, or S
  let userChoice = prompt("Please choose R, P, or S");
  // Alerts and logs the user's own choice in the console and converts it to uppercase if it wasn't before
  userChoice = userChoice.toUpperCase();
  console.log(`You chose ${userChoice}`);
  alert(`You chose ${userChoice}`);

  // Verifies that user is inputing only the allowed uppercase and lowercase letters
  while (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    alert("You must select R, P, or S.");
    userChoice = prompt("Please choose R, P, or S");
  }

  // Alerts the user of their own choice
  alert(`You chose ${userChoice}`);
  // Sets the available options for the computer
  let computerOptions = ["R", "P", "S"];
  // This randomly selects a variable from the options and assigns it to the computerChoice variable
  let computerChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  // Logs computer's choice in the console
  console.log(`The computer chose ${computerChoice}`);
  // Alerts user of computer's choice
  alert(`I chose ${computerChoice}`);

  // For each game played the computer evaluates if it won, lost, or tied. Logs the result. Alerts the user of the result. And updates both of the counters
  if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R")
  ) {
    console.log("You Win!");
    alert(`You Win!`);
    userStats.wins++;
    computerStats.losses++;
  } else if (userChoice === computerChoice) {
    console.log(`We Tied!`);
    alert(`We Tied!`);
    userStats.ties++;
    computerStats.ties++;
  } else {
    console.log("You lose!");
    alert(`You Lose!`);
    userStats.losses++;
    computerStats.wins++;
  }

  // Takes parameters to see if it can continue to a new game
  playAgain = confirm("Do you want to play again?");
  // If the parameters are true, the game will continue
  if (playAgain) {
    rockPaperScissorsGame();
    // If not, the following will happen
  } else {
    // It will log the results to the console
    console.log(`Thank you for playing! Here are the final results:
           Your wins: ${userStats.wins}
           Your losses: ${userStats.losses}
           Our ties: ${userStats.ties}`);
    //  As well as alert the results to the user
    alert(`Thank you for playing! Here are the final results:
           Your wins: ${userStats.wins}
           Your losses: ${userStats.losses}
           Our ties: ${userStats.ties}`);
  }
}
