import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import "./styles/main.css";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
