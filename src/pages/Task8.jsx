import { React, useState } from "react";

// counter
export default function Task8() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 id="result" style={{ marginBottom: "18px" }}>
          {count}
        </h1>
        <button onClick={() => setCount(count + 1)} style={{ outline: 0 }}>
          Click Me
        </button>
      </div>
    </div>
  );
}
