import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Catalog from "./pages/catalog/catalog.jsx";
import About from "./pages/about/about.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Card from "./pages/card/card.jsx";
import Sign from "./pages/sign/sign.jsx";
import Clothes from "./catalogs/clothes/clothes.jsx";
import Project from "./catalogs/project/project.jsx";
import Furniture from "./catalogs/furniture/furniture.jsx";
import Shoes from "./catalogs/shoes/shoes.jsx";
import Miscellaneous from "./catalogs/miscellaneous/miscellaneous.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },


  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },


  {
    path: "/catalog/1",
    element: <Clothes />,
  },
  {
    path: "/catalog/2",
    element: <Project />
  },
  {
    path: "/catalog/3",
    element: <Furniture />
  },
  {
    path: "/catalog/4",
    element: <Shoes />
  },
  {
    path: "/catalog/5",
    element: <Miscellaneous />
  },
]);
