import React from "react";
import ReactDOM from "react-dom/client";

/** SCSS */
import "./index.scss";
import "./SCSS/main.scss";
import "./SCSS/register.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
