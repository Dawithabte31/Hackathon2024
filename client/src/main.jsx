import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextsellerProvider } from "./sellercontext/Contextseller";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextsellerProvider>
      <App />
    </ContextsellerProvider>
  </React.StrictMode>,
);
