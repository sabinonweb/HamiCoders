import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import App from "./App";
import PostDisplay from "./components/post/PostDisplay";
import { createContext } from "react";
import { PostData } from "./utilities/CardElement";
import Posts from "./utilities/CardElement";
export const PostContext = createContext<PostData | undefined>(undefined);

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/posts/:id",
          element: <PostDisplay></PostDisplay>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
export default Router;
