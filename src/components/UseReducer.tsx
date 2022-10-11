import React, { useReducer } from "react";

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>UseReducer</h1>
      <p>カウント:{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>ー</button>
    </div>
  );
};

export default UseReducer;
