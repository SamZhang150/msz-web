import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/fonts.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./screens/ErrorPage";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ul class="navbar">
      <li class="navbar-item">
        <a class="nav-link garet-b" href={"/"}>
          Home
        </a>
      </li>
      <li class="navbar-item">
        <a class="nav-link garet-b" href={"/projects"}>
          Projects
        </a>
      </li>
      <li class="navbar-item">
        <a class="nav-link garet-b" href={"/contact"}>
          Contact
        </a>
      </li>
    </ul>
    <RouterProvider class="router" router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
