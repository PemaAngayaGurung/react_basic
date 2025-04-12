import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import User from "./components/User/User.jsx"
import Github from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"user/:userid",
        element: <User/>
      },
      {
        path:"github",
        element: <Github/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
