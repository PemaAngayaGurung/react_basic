import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import {Home, About} from "./index.js"

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
        }
    ],
  },
]);
