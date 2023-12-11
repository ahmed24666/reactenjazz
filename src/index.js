import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";

import MyContextProvidor from "./context/MyContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContextProvidor>
        <App />
      </MyContextProvidor>
    </BrowserRouter>
  </React.StrictMode>
);

