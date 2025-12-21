import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { brandTokens } from "./theme/brand.tokens";
import { applyTheme } from "./theme/applyTheme";
import "./styles/globals.css";

applyTheme(brandTokens);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
