// Global Object: we can access this object in any files.

// var: mutable/changeable - global scope variable
var varContainer = "Global Scope";
var varFunction = () => {
  console.log("This is a function expression using a var keyword.");
};

// window object: Global object in a browser.
// console.log(
//   "== global scope variables and functions inside of the window object =="
// );
// console.log("Var Variable:", window.varContainer);
// window.varFunction();

// console.log("== Automatic Prefix ==");
// console.log(varContainer);
// varFunction();

// let letContainer = "This is a block scope variable";
// const constContainer = "This is a block scope variable";

// console.log("Let Variable:", window.letContainer);
// console.log("Const Variable:", window.constContainer);

// console.log("== PROBLEM ==");
// var varContainer = "Updated Global Scope";
// var varFunction = () => {
//   console.log("Updated function expression using var keyword.");
// };

// console.log(window.varContainer);
// window.varFunction();
// console.log(varContainer);
// varFunction();

// Note: window object is not available in node.
// ReferenceError: window is not defined

// Node: Global - this is the global object in node.
console.log("Var:", global.varContainer); //Var: undefined
global.varFunction(); //TypeError: global.varFunction is not a function
