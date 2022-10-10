import React, { useState, useEffect } from "react";

const UseStateEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);
  return (
    <div>
      <h1>useState useEffect</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ＋
      </button>
    </div>
  );
};

export default UseStateEffect;
