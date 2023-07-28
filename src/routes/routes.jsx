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
import Product from "../pages/Product";
import { getApi } from "../Util/apiCall";
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
          element: <Shop />,
          // loader: async () =>{
          //   return await 
          // }
          
        },
        {
          path: 'shop/:productId',
          element: <Product />,
          loader: async ({params}) =>{
            return await getApi(`/product/${params.productId}`)
          }
        },
        
        {
          path: '/test',
          element: <Test />
        }
      ]
    },
  ]);