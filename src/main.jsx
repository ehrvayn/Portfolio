import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DarkModeProvider } from "./context/DarkmodeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
);
