import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import TopAnime from "../components/TopAnime";
import TopCharacters from "../components/TopCharacters";
import TopManga from "../components/TopManga";
import TopReviews from "../components/TopReviews";
import Markup from "../layout/Markup";

// Router Definitions Goes Here
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Markup></Markup>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/topAnime", element: <TopAnime></TopAnime> },
      { path: "/topManga", element: <TopManga></TopManga> },
      { path: "/topReviews", element: <TopReviews></TopReviews> },
      { path: "/topCharacters", element: <TopCharacters></TopCharacters> },
      { path: "/aboutUs", element: <TopReviews></TopReviews> },
    ],
  },
]);
