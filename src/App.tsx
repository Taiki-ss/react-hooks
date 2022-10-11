import { useState } from "react";
import "./App.css";
import UseContext from "./components/UseContext";
import UseRef from "./components/UseRef";
import UseStateEffect from "./components/UseStateEffect";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";

function App() {
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
      <UseMemo />
      <hr />
    </div>
  );
}

export default App;
