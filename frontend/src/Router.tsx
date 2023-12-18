import { createBrowserRouter } from "react-router-dom";
import { FeedPage } from "./components/pages/FeedPage";
import { ReviewPage } from "./components/pages/ReviewPage";
import { Layout } from "./components/pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <FeedPage></FeedPage>, index: true },
      { path: "/review", element: <ReviewPage></ReviewPage> },
    ],
  },
]);
