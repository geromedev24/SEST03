// Looping Statements
// Repeatedly execute a block of code while a condition is met.

// 1. For Loop
/*
Components of a For Loop:
1. Initial expression / Variable Initialization
2. Conditon expresion
3. Increment/Decrement
*/
for (let i = 1; i <= 3; i++) {
  console.log("For Loop count:", i);
}
// Print even numbers from 1-10
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Even numbers:", i);
  }
}
// Print odd numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log("Odd numbers:", i);
  }
}

// 2. While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// 3. Do-While Loop
let counter = 1;
do {
  console.log("Do-While Loop count:", counter);
  counter++;
} while (counter <= 3);

// Break and Continue
// Continue: skips the current iteration, and move on to the next iteration.
// Break: terminate the loop
let number = 1;

while (number <= 20) {
  if (number == 13) {
    number++;
    continue;
  }
  if (number % 2 == 1) {
    console.log("Number:", number);
  }
  number++;
}

// Break
let num = 1;
while (num <= 20) {
  if (num == 15) {
    break;
  }
  if (num == 13) {
    num++;
    continue;
  }
  if (num % 2 == 1) {
    console.log("Num:", num);
  }
  num++;
}
