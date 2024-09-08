import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //
  // useState in React,
  // first value is an array
  // seconds value is a function
  // const [count, setCount] here is Destructuring the useState()
  // naming the first value is [ count ]
  // naming second function is [ setCount ]

  function Adding() {
    setCount(count + 1);
  }
  // function plus input vlaue (count +1 )

  function Minusing() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Adding}>+</button>
      <button onClick={Minusing}>-</button>
    </div>
  );
}

export default App;
