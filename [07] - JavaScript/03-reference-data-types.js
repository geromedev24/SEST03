//   Arrays: Store a collection of values
//   Item/Element:individual value
//   Index: location of the element inside of the array
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("Data Type of the numbers array:", typeof numbers);
console.log("Numbers:", numbers);

console.log("First Element:", numbers[0]);
console.log("Undefined:", numbers[9]);

console.log("Length:", numbers.length);
console.log("Last Element:", numbers[numbers.length - 1]);

// Object Oriented Programming - OOP
// Properties: Information about the object
// Methods: Functionalities that an object can do
let car = {
  color: "red",
  model: "sedan",
  year: 1970,
  start() {
    console.log("The engine starts");
  },
  stop: function () {
    console.log("The engine stops");
  },
};
console.log("Car:", car);
console.log("Data Type:", typeof car);

console.log("Color of the Car:", car.color);
console.log("Model of the Car:", car.model);
car.start();
car.stop();

// 1. Functions:
// Reusable block of code that can be executed whenever needed.
function greet() {
  let name = "Justin";
  console.log("Hello! Welcome to the world of functions.");
  console.log("Let's Go!");
}

//   Calling a function
greet();
greet();
greet();

// 2. Function definition with parameters
// Parameters: placeholders
// Argument: values passed to a functions parameters

function greetIndividual(name) {
  console.log("Hello!", name);
}

greetIndividual("Rico");
greetIndividual("Gerome");
greetIndividual("Justin");
greetIndividual("Ann");
greetIndividual("Eyben");
