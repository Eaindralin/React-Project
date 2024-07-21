import { useState } from "react";
import useStateWithHistory from "./useStateWithHistory";

export default function StateWithHistoryComponent(){
    const[count,setCount,{history,pointer,back,forward,go}]=
        useStateWithHistory(1)

    const [name,setName] = useState("Kyle")

    return (
      <div>
        <div>{count}</div>
        <div>{history.join(",")}</div>
        <div>Pointer - {pointer}</div>
        <div>{name}</div>
        <button
          onClick={() => setCount((currentCount) => currentCount * 2)}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Double
        </button>
        <button
          onClick={() => setCount((currentCount) => currentCount + 1)}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Increment
        </button>
        <button
          onClick={back}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Back
        </button>
        <button
          onClick={forward}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Forward
        </button>
        <button
          onClick={() => go(2)}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Go to index 2
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