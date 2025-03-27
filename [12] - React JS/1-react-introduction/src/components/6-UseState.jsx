import { useState } from "react";
/*
useState():
- a react hook that allows us to create a stateful variable
    and setter function to update its value.

Syntax:
const [statefulVariable, setterFunction] = useState(initialValue)

*/

function UseState() {
  /*
  //   Variables don't trigger rerender.
  let count = 0;

  const increment = () => {
    // count = count + 1
    count += 1;
    console.log("Count:", count);
  };
  */

  const [count, setCount] = useState(0);

  /*
  This will still increment by one.
    const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  */

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState;
