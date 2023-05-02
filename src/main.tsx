import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Startpage } from "./pages/Startpage";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { Error } from "./pages/Error";
// import { animalsLoader } from "./loader/animalsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Startpage></Startpage>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
    errorElement: <Error></Error>,
    // loader: animalsLoader,
  },
  {
    path: "/animals/:id",
    element: <Animal></Animal>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
