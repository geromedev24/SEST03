/*
Two types of components:
1. Class-based components
2. Function-based components

Follows Pascal Naming Convention: OneTwoThree

JSX: JavaScript XML

Library - customizable
Framework - built-in

*/

function Component() {
  const greeting = "Welcome to React.js. Let's go!";

  // return(): this can only return a single element.
  return (
    <div>
      <h1>Welcome to React JS.</h1>
      <p>React: This is a JavaScript Library for building user interfaces.</p>
      <p>{greeting}</p>
    </div>
  );
}

export default Component;
