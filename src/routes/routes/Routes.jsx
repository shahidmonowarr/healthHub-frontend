import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home/Home";
import Main from "../../pages/layout/Main";
import Login from "../../pages/login/Login";

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
    ],
  },
]);

export default router;
