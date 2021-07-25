import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import StateContext from "./context/StateContext";
ReactDOM.render(
  <StateContext>
    <App />
  </StateContext>,
  document.getElementById("App")
);
