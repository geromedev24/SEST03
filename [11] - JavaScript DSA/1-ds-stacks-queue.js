// Stack: add and remove elements at the end(top) of the array.
// Last In First Out (LIFO) principle
let plateStack = [];

plateStack.push("Plate 1");
plateStack.push("Plate 2");
plateStack.push("Plate 3");

console.log("Plate Stack:", plateStack);

plateStack.pop();
plateStack.pop();

console.log("Plate Stack:", plateStack);

// Queue: add an element at the end of the array, remove the element at the start of the array.
// First In First Out (FIFO) Principle
// Enqueue (enter)
// Dequeue (exit)

let queue = [];

queue.push("Person 1");
queue.push("Person 2");
queue.push("Person 3");

console.log("Queue:", queue);

// .shift(): delete an element at the start of the array.
queue.shift();
console.log("Queue:", queue);
