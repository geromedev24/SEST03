// Callback:
// function that is passed as an argument to another function.
// Callbacks are used to handle asynchronous operations.

// Parameter: placeholder
// Atguments: values that will replace the function's parameters.

const getData = (callback) => {
  setTimeout(() => {
    const data = "This is the data.";
    callback(data);
  }, 3000);
};

const processData = (data) => {
  console.log("Processing data..");
  console.log("Processed Data:", data);
};

getData(processData);
