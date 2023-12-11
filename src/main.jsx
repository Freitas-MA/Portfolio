import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./Styles/style.css";
import "./Styles/utilities.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> }, 
    //   { path: "*", element: <Error404 /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<App />} />
    </RouterProvider>  </React.StrictMode>
);
