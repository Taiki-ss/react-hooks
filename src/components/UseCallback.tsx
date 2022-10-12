import React, { useState, useCallback } from "react";
import SomeChild from "./SomeChild";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const showCount = useCallback(() => {
    alert("これは重い処理です");
  }, [counter]);
  return (
    <div>
      <h1>useCallback</h1>
      <SomeChild showCount={showCount} />
    </div>
  );
};

export default UseCallback;
