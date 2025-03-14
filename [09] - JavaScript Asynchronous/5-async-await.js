// Async and Await

const taskOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskComplete = true;
      if (taskComplete) {
        resolve("Task 1 complete.");
      } else {
        reject("Task 1 failed.");
      }
    }, 3000);
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskComplete = false;
      if (taskComplete) {
        resolve("Task 2 complete.");
      } else {
        reject("Task 2 failed.");
      }
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskComplete = true;
      if (taskComplete) {
        resolve("Task 3 complete.");
      } else {
        reject("Task 3 failed.");
      }
    }, 1000);
  });
};

// Async and Await
// Async = makes a function return a promise.
// Await = makes an async function wait for a promise.

const executeAll = async () => {
  try {
    const taskOneResult = await taskOne();
    console.log(taskOneResult);

    const taskTwoResult = await taskTwo();
    console.log(taskTwoResult);

    const taskThreeResult = await taskThree();
    console.log(taskThreeResult);
  } catch (error) {
    console.error("Error:", error);
  }
};

executeAll();
