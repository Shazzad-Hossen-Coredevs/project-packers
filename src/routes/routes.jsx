import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Recovery from "../pages/Recovery";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
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
          path: '/test',
          element: <Test />
        }
      ]
    },
  ]);