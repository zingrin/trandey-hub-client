import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Collection from "../pages/Collection";
import Gadget from "../pages/Gadget";
import Jewellery from "../pages/Jewellery";
import Beauty from "../pages/Beauty";
import Blogs from "../pages/Blogs";
import TrendyProducts from "../components/TrendayProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: "trendy-products",
        element: <TrendyProducts />,
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "collection",
        element: <Collection />
      },
      {
        path: "gadget",
        element: <Gadget />
      },
      {
        path: "jewellery",
        element: <Jewellery />
      },
      {
        path: "beauty",
        element: <Beauty />
      },
      {
        path: "blogs",
        element: <Blogs />
      }
    ]
  }
]);

export default router;
