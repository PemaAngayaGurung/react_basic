import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import {Home, About, Login} from "./index.js"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "",
            element: <Home/>
        },
        {
            path: "about",
            element: <About/>
        },
       
    ],
  },
  {
    path:"/login",
    element: <Login/>
  }
]);
