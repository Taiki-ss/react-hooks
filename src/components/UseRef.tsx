import React, { useRef } from "react";

const UseRef = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleRef = () => {
	  console.log(ref.current?.value);
	  ref.current?.focus()
  };
  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
    </div>
  );
};

export default UseRef;
