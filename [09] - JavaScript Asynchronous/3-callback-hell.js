// Callback:
// function that is passed as an argument to another function.
// Callbacks are used to handle asynchronous operations.

// Callback Hell : multiple callbacks that are dependent on each other.

const taskOne = (callback) => {
  setTimeout(() => {
    console.log("Task 1 is complete.");
    callback();
  }, 3000);
};
const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("Task 2 is complete.");
    callback();
  }, 2000);
};
const taskThree = (callback) => {
  setTimeout(() => {
    console.log("Task 3 is complete.");
    callback();
  }, 1000);
};
// taskOne();
// taskTwo();
// taskThree();

// Nested Callbacks: Callback Hell
taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      console.log("All tasks complete.");
    });
  });
});
