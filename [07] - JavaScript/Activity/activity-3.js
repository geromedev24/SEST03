const numRandom = Math.random() * 10 + 1;
const secretNumber = Math.floor(numRandom);

let attempt = 0;
let guessedNumber;
console.log(secretNumber);

let name = prompt(
  "Welcome to the Guess the Secret Number. Please enter your name:"
);

do {
  guessedNumber = parseInt(prompt("Please enter your Number (1 - 10 only)"));

  if (guessedNumber > 0 && guessedNumber <= 10) {
    attempt++;
    if (guessedNumber < secretNumber) {
      console.log(`${guessedNumber} is Too low! Try again ${name}.`);
    } else if (guessedNumber > secretNumber) {
      console.log(`${guessedNumber} is Too high! Try again ${name}.`);
    } else if (guessedNumber == secretNumber) {
      console.log(
        `Congratulations ${name}! You have guessed the correct number: ${secretNumber}`
      );
      console.log(`It took you ${attempt} attempts`);
    }
  } else {
    console.log(`Please RETRY ${name}. Enter only numbers between 1 - 10`);
  }
} while (guessedNumber != secretNumber);
