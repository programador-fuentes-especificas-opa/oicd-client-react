import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterComponent from "./Router";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
