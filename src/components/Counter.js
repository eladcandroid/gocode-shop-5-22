import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("blue");

  useEffect(() => console.log("AFTER FIRST RENDER count", count), [count]);
  return (
    <div>
      <button onClick={() => setColor("red")}>Change to red</button>
      <div style={{ color }}>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
