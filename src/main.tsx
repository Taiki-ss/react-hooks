import React, { createContext, createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const myInfo = {
  name: "taiki",
  age: 33,
};

const MyContext = createContext(myInfo);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MyContext.Provider value={myInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider>
);

export default MyContext;
