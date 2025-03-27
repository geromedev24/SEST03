import { useEffect, useState } from "react";
/*
useState():
- allows us to create a stateful variable 
    and a setter function to update it's value.
Syntax:
const [statefulVariable, setterFunction] = useState(initialValue)
*/

/*
useEffect(): this is a hook that allows us to perform side effects.
When the value of state variables updates it often trigger a side effect.

Syntax: useEffect(function, array)

useEffect(() => {}, []) - run only on mount
useEffect(() => {}, [state]) - run on mount and every time the value of the state variable has been updated.
*/
function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform the side effect.
    console.log("Count:", count);

    // Optional Return function.
    return () => {
      console.log("Component unmounts and cleaned.");
    };
  }, [count]); //Dependency array

  const increment = () => {
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
export default UseEffect;
