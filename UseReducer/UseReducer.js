import React, { useReducer } from "react";
import UseReducer2 from './UseReducer2'
import UsingMultipleReducer from './UsingMultipleReducer'

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <hr />
      <h4>
        <u>Simple useReducer Example</u>
      </h4>
      <h6><u>Note:</u> Maintaining multiple varibles in a single state object is suited & dealing with global state then we can use 'useReducer'</h6>
      <h6>Count: {count}</h6>
      <button onClick={() => dispatch("increment")}>Add</button>
      <button onClick={() => dispatch("decrement")}>Minus</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <hr />

      <h4><u>Another complex state managing Example using reducer</u></h4>
      <UseReducer2 />

      <hr />

     <h4><u>Multiple Reducer</u></h4>
      <UsingMultipleReducer />
    </>
  );
}

export default UseReducer;
