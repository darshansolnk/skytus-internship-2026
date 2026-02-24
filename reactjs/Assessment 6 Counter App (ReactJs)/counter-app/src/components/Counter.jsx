import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);
  const limit = 10; // warning limit

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <h2>Counter App</h2>

      <div className="counter-value">{count}</div>

      <div>
        <button className="increase" onClick={increase}>
          Increase
        </button>

        <button
          className="decrease"
          onClick={decrease}
          disabled={count === 0}  // Conditional Rendering
        >
          Decrease
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>

      {/* Conditional Rendering for Warning */}
      {count > limit && (
        <div className="warning">
          ⚠ Counter exceeded limit of {limit}
        </div>
      )}
    </div>
  );
};

export default Counter;