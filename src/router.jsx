import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Catalog from "./pages/catalog/catalog.jsx";
import About from "./pages/about/about.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Card from "./pages/card/card.jsx";
import Sign from "./pages/sign/sign.jsx";
import ProductDetails from "./pages/catalog/products/product-details/product-details.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
    children: [
      {
        path: ':categoryId',
        element: <Catalog />,
      },
    ],
  },
  {
    path: '/catalog',
    element: <ProductDetails />,
    children: [
      {
        path: 'v1/products/:ProductId',
        element: <ProductDetails />,
      },
    ],
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
]);
