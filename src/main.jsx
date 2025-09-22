
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loaging...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);