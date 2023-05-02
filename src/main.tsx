import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Startpage } from "./pages/Startpage";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Startpage></Startpage>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
  },
  {
    path: "/animals/:id",
    element: <Animal></Animal>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
