import { type } from "@testing-library/user-event/dist/type";
import "./index.css";
import { useState, useReducer } from "react";

const intialValue ={
    people:[],
}

function reducer(state,action){
    if (action.type === "INPUT_ADDED") {
      const newPeople = [...state.people,action.payload];

      return {...state,people: newPeople};
    }
}

function UseReduce() {    
    const [inputValue,setInputValue] = useState("");
    const [state, dispatch] = useReducer(reducer,intialValue);

    function submitHeader(e){
        e.preventDefault();
        const newItem ={id:Math.random().toString(),name:inputValue}
        dispatch({type:"INPUT_ADDED",payload:newItem})
        setInputValue("");
    }
    
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={submitHeader}>
          <input
            type="text"
            value={inputValue}
            style={{ width: "150px", height: "30px" }}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Your Text"
          />
          <button type="submit" style={{ width: "50px", height: "30px",margin:"10px" }}>
            Submit
          </button>
        </form>
        <ul>
            {
                state.people.map((person) => {
                    return <li key={person.id}>{person.name}</li>
                })
            }
        </ul>
      </div>
    );
}

export default UseReduce;