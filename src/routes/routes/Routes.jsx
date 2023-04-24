import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home/Home";
import Main from "../../pages/layout/Main";
import Login from "../../pages/login/Login";
import NotFound from "../../pages/shared/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
