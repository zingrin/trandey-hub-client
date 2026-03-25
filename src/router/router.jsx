import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
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
import CartPage from "../components/CartPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import ReturnRefundPolicy from "../pages/ReturnRefundPolicy";

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
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/cart/:id",
        element: <CartPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },

      { path: "/terms-conditions", element: <TermsConditions /> },

      { path: "/return-refund-policy", element: <ReturnRefundPolicy /> },
    ],
  },
]);

export default router;
