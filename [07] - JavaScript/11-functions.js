// Functions: reusable block of code that performs a specific task.
// Parameters: placeholders.
// Arguments: values passed to a function's parameters.

// Hoisting: moving functions to the top of the file.
// only works with function definition

// Calling a function
let answer = sum(10, 20);
console.log("Answer:", answer);
sum(20, 30);

// 1. Function definition with parameters.
function sum(num1, num2) {
  return num1 + num2;
  console.log(
    "Once return has been entered, the next codes become unreachable"
  );
}

// 2. Functions with default arguments:
// Only works if applied to the last parameter
function power(base, exponent = 2) {
  return base ** exponent;
}

console.log("Power:", power(2, 3));
console.log("Power:", power(2));

// 3. Rest Parameters (...)
// You can pass multiple parameters
function total(...numbers) {
  let total = 0;

  let i = 0;
  while (i < numbers.length) {
    // total = total + number[i]
    total += numbers[i];
    i++;
  }

  return total;
}

console.log("Total:", total(10, 20, 30, 40, 50));

// 4. Function Expression
// variable = function()
// NOTE: Hoisting is not supported for function expression
// Anonymous function expression: without a name
// Named function expression: with a name
const difference = function (num1, num2) {
  return num1 - num2;
};

console.log("Difference:", difference(10, 5));

// 5. Arrow functions
// no need to input [function] just use =>
// const intro = (firstName, lastName) => {
//   console.log(`I am ${firstName} ${lastName}`);
// };

// intro("Gerome", "Davao");

// Note: If you have a single parameter: remove the pair of parenthesis.
// Note: If you have a single parameter: remove the pair of curly brackets.
// const intro = (name) => {
//   console.log(`I am ${name}`);
// };

const intro = (name) => {
  console.log(`I am ${name}`);
};

intro("Gerome Davao");
