import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProgressiveBlur } from "./components/ui/skiper-ui/skiper41.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
    <ProgressiveBlur position="top" backgroundColor="#f5f4f3"/>
    <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3"/>

      <App />
    </StrictMode>
  </BrowserRouter>
);
