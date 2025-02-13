import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fontsource/montserrat"; // Default weight (400)
import "@fontsource/montserrat/700.css"; // Bold for headings
import "@fontsource/inter"; // Default Inter font
import "@fontsource/inter/400.css"; // Regular body font
import LoadingScreen from "./components/Helpers/LoadingScreen";

const App = lazy(() => import("./App")); // Lazy load App

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
