import React, {useContext} from "react";
import MyContext from "../main";

type info={
	name: string,
	age:number,
}

const UseContext=() => {
	const myInfo:info=useContext(MyContext);
  return (
    <div>
		  <h1>useContext</h1>
		  <p>{myInfo.name}</p>
		  <p>{myInfo.age}</p>
    </div>
  );
};

export default UseContext;
