import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/signUp/SignUp";
import AddProduct from "../Dashboard/AddProduct";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";

export const router = createBrowserRouter([
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
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])
