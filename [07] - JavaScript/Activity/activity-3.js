console.log("Welcome Player! Do you want to play my guessing game?");
console.log("If so, guess between 1 and 10");

const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumber;

do {
  guessedNumber = parseInt(prompt("Enter your guess:"), 10);
  attempts++;

  if (guessedNumber < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guessedNumber > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(
      `Congratulations! You guessed the correct number: ${secretNumber}`
    );
    console.log(`It took you ${attempts} attempts.`);
  }
} while (guessedNumber !== secretNumber);
