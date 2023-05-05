import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";
import { Error } from "./pages/Error";
import { Startpage } from "./pages/Startpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
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
        errorElement: <Error></Error>,
      },
    ],
  },
]);
