import React from "react";
import ReactDOM from "react-dom/client";
import * as VFX from "react-vfx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VFX.VFXProvider>
      <App />
    </VFX.VFXProvider>
  </React.StrictMode>
);
