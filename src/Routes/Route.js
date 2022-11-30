import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/pages/blog/Blog";
import DurantaAllDetails from "../components/pages/categories/DurantaAllDetails";
import DurantaDetails from "../components/pages/categories/DurantaDetails";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/signUp/SignUp";
import AddProduct from "../Dashboard/AddProduct";
import AllBuyers from "../Dashboard/AllBuyers";
import AllSellers from "../Dashboard/AllSellers";
import Dashboard from "../Dashboard/Dashboard";
import Payment from "../Dashboard/Payment";
import UserOrder from "../Dashboard/UserOrder";
import UserProducts from "../Dashboard/UserProducts";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
     path:'*',
     element:<ErrorPage></ErrorPage>
    },
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/durantaDetails',
                loader:()=>fetch('http://localhost:5000/duranta'),
                element:<DurantaDetails></DurantaDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        ]
    },
    {
        
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard/*',
                element:<ErrorPage></ErrorPage>
               },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/sellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/buyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/order',
                element:<UserOrder></UserOrder>
            },
            {
                path:'/dashboard/myproducts',
                element:<UserProducts></UserProducts>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])
