// 1. Comparison Operators
// Return: Either true or false

let num1 = 10;
let num2 = 5;

console.log("Equal to (==):", num1 == num2);
console.log("Equal to (==):", num1 == 10);

// Type coercion: automatic conversion of the data type if necessary
console.log("Equal to (==):", num1 == "10");

// Not Equal to (!=): Not
console.log("Not Equal to (!=):", num1 != num2);
console.log("Not Equal to (!=):", num1 != 10);

// Type coercion: automatic conversion of the data type if necessary
console.log("Not Equal to (!=):", num1 != "10");

// Strict Equal to (===) : check if two values are equal in value and data type
// Does not support type coercion
console.log("Strict Equal to (===):", num2 === 5);
console.log("Strict Equal to (===):", num2 === "5");

// Strict Not Equal to (!==): check if two values are NOT equal in value and data type
// Does not support type coercion
console.log("Strict Equal to (!==):", num2 !== 5);
console.log("Strict Equal to (!==):", num2 !== "5");

console.log("Greater Than:", num1 > num2);
console.log("Less Than:", num1 < num2);

console.log("Greater Than or Equal to (>=):", num1 >= num2);
console.log("Greater Than or Equal to (>=):", num1 >= 10);
console.log("Greater Than or Equal to (>=):", num1 >= 12);

console.log("Less Than or Equal to (<=):", num2 <= num1);
console.log("Less Than or Equal to (<=):", num2 <= 5);
console.log("Less Than or Equal to (<=):", num2 <= 4);

// 2. Logical Operators
// AND - &&
// OR - ||
// NOT - !

let sunny = true;
let warm = true;

// AND: True only if all the conditions are true, otherwise false.
console.log("Is it sunny AND warm?:", sunny && warm);

// OR: True if at least one of the conditions is true, otherwise false.
console.log("Is it sunny OR warm?:", sunny || warm);

// NOT: Inverts the value of booleans
console.log("Not Sunny:", !sunny);
