import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer';
import Header from '../components/pages/shared/Header';
import Navbar from '../components/pages/shared/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;