import React, { useState } from "react";

const AdvanceSearch = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment} disabled={count === 10}>
          Increment
        </button>
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
      </div>
      {count >= 10 && <p>Limit Reached!</p>}
    </div>
  );
};

export default AdvanceSearch;
