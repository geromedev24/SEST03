// Synchronous Programming
// Statements are executed line by line (sequentially).
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Asynchronous Programming
// Asynchronous Operations: operation that takes time to complete.

// Built-In asynchronous function.
// setTimeout(function, delay): schedule the execution of a function after a specified delay.

setTimeout(() => {
  console.log("Task 4 (Asynchronous)");
}, 2000);

console.log("Task 5");
