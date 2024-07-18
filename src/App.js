// - component needs to be uppdercase
// - must be in the function/component body
// - cannot call conditionally eg. if statement,loop
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prevValue) => prevValue +1);   
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase} style={{ padding: "0.5rem" }}>
        +
      </button>
    </div>
  );
}

export default App;
