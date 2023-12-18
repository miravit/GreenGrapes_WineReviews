import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ReviewPage } from "./components/pages/ReviewPage";
import { Feed } from "./components/pages/Feed";
import { Layout } from "./components/pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <HomePage></HomePage>, index: true },
      { path: "/", element: <Feed></Feed> },
      { path: "/review", element: <ReviewPage></ReviewPage> },
    ],
  },
]);
