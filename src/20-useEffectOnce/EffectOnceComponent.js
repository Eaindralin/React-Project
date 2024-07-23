import { useState } from "react";
import useEffectOne from "./useEffectOnce";
export default function EffectOneComponent() {
  const [count, setCount] = useState(0);

  useEffectOne(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}
