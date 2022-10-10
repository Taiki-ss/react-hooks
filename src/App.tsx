import { useState } from "react";
import "./App.css";
import UseContext from "./components/UseContext";
import UseStateEffect from "./components/UseStateEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UseStateEffect />
      <hr />
      <UseContext />
      <hr />
    </div>
  );
}

export default App;
