import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer';
import Navbar from '../components/pages/shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;