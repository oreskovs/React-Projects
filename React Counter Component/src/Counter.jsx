import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
        <button className="decrement-btn" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
