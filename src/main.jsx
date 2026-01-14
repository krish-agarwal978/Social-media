import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./components/Postlist.jsx";
import CreatePost from "./components/Createpost.jsx";
import FAQ from "./components/FAQ.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      { path: "/about", element: <About /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
