import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/montserrat"; // Default weight (400)
import "@fontsource/montserrat/700.css"; // Bold for headings
import "@fontsource/inter"; // Default Inter font
import "@fontsource/inter/400.css"; // Regular body font
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
