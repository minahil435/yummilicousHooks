import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./_base.css";
import "./index.css";
require("dotenv").config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

