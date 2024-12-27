import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import { githubInfoLoader } from "./components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="user/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>

      <Route path="github" element={<Github />} loader={githubInfoLoader} />

      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
