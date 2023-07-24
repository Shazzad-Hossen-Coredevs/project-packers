import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Recovery from "../pages/Recovery";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import Shop from "../pages/Shop";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/reset',
          element: <Recovery />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/test',
          element: <Test />
        }
      ]
    },
  ]);