// Procedural vs OOP

// Procedural Programming
// variables(data) and function are separate entities.

let make = "Toyota";
let model = "Camry";

function startCar(make, model) {
  console.log(`${make} ${model} has started.`);
}

console.log("== Procedural ==");
startCar(make, model);

// Object Oriented Programming
// Group related information and functinalities into a single unit.

const car = {
  make: "Toyota",
  model: "Camry",

  start() {
    console.log(`${this.make} ${this.model} started.`);
  },
  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  },
};

console.log("== OOP ==");
car.start();
car.stop();
