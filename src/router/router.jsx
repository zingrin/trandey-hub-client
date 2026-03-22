import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Gadget from "../pages/Gadget";
import Jewellery from "../pages/Jewellery";
import Beauty from "../pages/Beauty";
import Collections from "../pages/Collections";
import ErrorPage from "../components/ErrorPage";
import ProductDetails from "../pages/ProductDetails";
import SalePage from "../pages/salePages";
import BlogDetails from "../pages/BlogDetails";
import BestSeller from "../components/BestSeller";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Catalog from "../components/Catalog";
import BestSellerDetails from "../pages/BestSellerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "trendy-products",
      //   element: <TrendyProducts />,
      // },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "gadget",
        element: <Gadget />,
      },
      {
        path: "jewellery",
        element: <Jewellery />,
      },
      {
        path: "beauty",
        element: <Beauty />,
      },

      {
        path: "collection",
        element: <Collections />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/",
        element: <BestSeller />,
      },
      {
        path: "/bestSellerDetails/:id",
        element: <BestSellerDetails />,
      },

      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
