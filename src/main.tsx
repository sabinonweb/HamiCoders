import React from "react";

import "./styles/tailwind.css";
import "./styles/main.css";
import Router from "./Router";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
