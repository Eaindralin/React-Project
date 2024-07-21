import useArray from "./useArray";

export default function ArrayComponent(){
    
    const {array,set,push,remove,filter,update,clear} = new useArray([
        1,2,3,4,5,6
    ])
    return (
      <div>
        <div>{array.join(",")}</div>
        <button
          onClick={() => push(7)}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Add 7
        </button>
        <button
          onClick={() => update(1, 9)}
          style={{ width: "150pt", height: "20pt", margin: "1rem" }}
        >
          Change Second Element
        </button>
        <button
          onClick={() => remove(1)}
          style={{ width: "150pt", height: "20pt", margin: "1rem" }}
        >
          Remove Second Element
        </button>
        <button
          onClick={() => filter((n) => n < 3)}
          style={{ width: "150pt", height: "20pt", margin: "1rem" }}
        >
          Keep Numbers Less Than 4
        </button>
        <button
          onClick={() => set([1, 2])}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Set To 1,2
        </button>
        <button
          onClick={clear}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Clear
        </button>
      </div>
    );
    
}