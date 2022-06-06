import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("blue");

  return (
    <div>
      <button onClick={() => setColor("red")}>Change to red</button>
      <div style={{ color }}>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("count", count);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
