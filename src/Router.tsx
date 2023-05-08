import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Animal } from "./pages/Animal/Animal";
import { Animals } from "./pages/Animals/Animals";
import { Error } from "./pages/Error/Error";
import { Startpage } from "./pages/Startpage/Startpage";

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
      },
      {
        path: "/animals/:id",
        element: <Animal></Animal>,
        errorElement: <Error></Error>,
      },
    ],
  },
]);
