import React, { useState } from "react";

export default function Toggle() {
  const [isToggled, setToggled] = useState(false);
  const [counterState, setCounterState] = useState(0);

  const toggleTrueFalse = () => setToggled(!isToggled);
  const incrementCounter = () => setCounterState(counterState + 1);

  return (
    <div className="App">
      <div className="container">
        <h1>
          <span role="img" aria-label="Decorative Emojis">
          </span>
        </h1>
        <h2>Your toggle is {isToggled.toString()} 🥳</h2>
        <button onClick={toggleTrueFalse}>
          <h3>Toggle me</h3>
        </button>
        <h2>You clicked below {counterState} times 🥳</h2>
        <button onClick={incrementCounter}>
          <h3>Click me</h3>
        </button>
      </div>
    </div>
  );
}

