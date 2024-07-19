import { type } from "@testing-library/user-event/dist/type";
import "./index.css";
import { useState, useReducer } from "react";

const intialValue ={
    count:0,
}

function reducer(state,action){
    if(action.type === 'increment'){
        return {...state, count:state.count + action.payload}
    }
}

function UseReduce() {

    
    const [count,setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer,intialValue);
    console.log(state);
  
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"increment",payload:1})} style={{ padding: "0.5rem" }}>+</button>
        </div>
    );
}

export default UseReduce;