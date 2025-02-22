import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fontsource/montserrat"; // Default weight (400)
import "@fontsource/montserrat/700.css"; // Bold for headings
import "@fontsource/inter"; // Default Inter font
import "@fontsource/inter/400.css"; // Regular body font
import { HelmetProvider } from "react-helmet-async";
import App from "./App"; // Import directly without lazy loading

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
