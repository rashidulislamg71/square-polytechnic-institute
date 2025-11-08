import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the whole app */}
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </StrictMode>
);
