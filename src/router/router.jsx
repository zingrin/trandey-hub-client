import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children:[
        {
        index:true,
        element: <Home/>

    },
]
  },
]);
export default router;