// Control Flow Structure

// 1. Conditional Statements
// Allow us to execute a block of code if a condition is met.

// {} - Code Block
// () - Condition Block

// If the age is greater than or equal to 18.
// let age = 17;

// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are NOT eligible to vote");
// }

// Ternary Operator
// Condition ? true : false

let age = 17;
let message =
  age >= 18 ? "You are eligible to vote" : "You are NOT eligible to vote.";
console.log(message);

let temp = -1;

if (temp < 0) {
  console.log("It's freezing! Wear a jacket.");
} else if (temp >= 0 && temp < 20) {
  // Range 0 - 19
  console.log("It's cool outside. ");
} else if (temp > 20 && temp < 30) {
  // Range 20 - 29
  console.log("It's warm outside");
} else {
  console.log("It's hot outside!");
}

// Switch-Case statement
let day = "Tuesday";

switch (day) {
  case "Monday":
    // If it's indented it will execute the code block
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  case "Wednesday":
    console.log("It's hump-day.");
    break;
  // break stops the code from continuing to execute and leak to other codes.
  default:
    console.log("It's just a normal day.");
}
