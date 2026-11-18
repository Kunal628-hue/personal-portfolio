import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./developer-portfolio.css";
import App from "./DeveloperPortfolio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
