import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/signUp/SignUp";
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
            }
        ]
    },
])
