import { useState } from "react";
import usePrevious from "./usePrevious";

export default function PreviousComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Kyle");
    const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button
        onClick={() => setCount((currentCount) => currentCount + 1)}
        style={{ width: "100pt", height: "20pt", margin: "1rem" }}
      >
        Increment
      </button>
      <button
        onClick={() => setName("John")}
        style={{ width: "100pt", height: "20pt", margin: "1rem" }}
      >
        Change Name
      </button>
    </div>
  );
}
