import React from "react";
// The 'logo' variable now holds the correct final URL path
import logo from "./assets/images/Logo/SPI_Logo.png"; 

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";

// ------------------------------------------------------------------
//  NEW CODE HERE: Set the favicon link's href
// ------------------------------------------------------------------
document.getElementById("favicon-link").href = logo; 
// ------------------------------------------------------------------

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);