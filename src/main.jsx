import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Menupage from "./pages/menupage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/menu",
    element: <Menupage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
