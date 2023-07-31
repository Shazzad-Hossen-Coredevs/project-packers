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
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import About from "../pages/About";
import FaqPage from "../pages/FaqPage";
import Orders from "../pages/Orders";
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
          path:'/cart',
          element: <Cart />

        },
        {
          path: '/test',
          element: <Test />
        },
        {
          path: '/checkout',
          element: <Checkout />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path:'/blog/:postId',
          element: <BlogPost />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/faq',
          element: <FaqPage />
        },
        {
          path:'account/orders',
          element: <Orders />
        }
      ]
    },
  ]);