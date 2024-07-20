import { useState } from "react";
import UseTimeOut from "./useTimeout";

export default function TimeoutComponent() {
    const [count,setCount] = useState(10);
    const {clear,reset} = UseTimeOut(() => setCount(0), 1000)

    return (
      <div>
        <div>{count}</div>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Increment
        </button>
        <button
          onClick={clear}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Clear TimeOut
        </button>
        <button
          onClick={reset}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Reset TimeOut
        </button>
      </div>
    );
}