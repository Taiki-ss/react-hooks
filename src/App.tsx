import { useState } from "react";
import "./App.css";
import UseContext from "./components/UseContext";
import UseRef from "./components/UseRef";
import UseStateEffect from "./components/UseStateEffect";
import UseReducer from "./components/UseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UseStateEffect />
      <hr />
      <UseContext />
      <hr />
      <UseRef />
      <hr />
      <UseReducer />
      <hr />
    </div>
  );
}

export default App;
