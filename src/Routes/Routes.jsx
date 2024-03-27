import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Books from "../Components/Books/Books";
import BookDetails from "../Components/Pages/BookDetails";
import ListedBooks from "../Components/Pages/ListedBooks";
import PagesToRead from "../Components/Pages/PagesToRead";
import Error from "../Components/Pages/Error";
import Contact from "../Components/Pages/Contact";
import About from "../Components/Pages/About";
import Read from "../Components/Bookmark/Read";
import Wish from "../Components/Bookmark/Wish";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/", element: <Books /> }],
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages",
        element: <PagesToRead />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
