import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ReviewPage } from "./components/pages/ReviewPage";
import { Feed } from "./components/pages/Feed";
import { Layout } from "./components/pages/Layout";
import GlobalStyles from "./assets/GlobalStyles";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <GlobalStyles />
        <Layout />
      </>
    ),
    children: [
      { path: "/", element: <HomePage></HomePage>, index: true },
      { path: "/", element: <Feed></Feed> },
      { path: "/review", element: <ReviewPage></ReviewPage> },
      { path: "/about", element: <AboutPage></AboutPage> },
      { path: "/contact", element: <ContactPage></ContactPage> },
    ],
  },
]);
