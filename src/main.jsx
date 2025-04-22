import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./Carbon.scss";
import "./index.css";
import App from "./App.jsx";
import Chart from "./Chart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
