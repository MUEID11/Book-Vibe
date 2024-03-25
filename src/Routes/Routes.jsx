import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Books from "../Components/Books/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/",
        element:<Books/>,
        loader: () => fetch('./../../public/books.json'), 
    }],
      },
    ],
  },
]);
