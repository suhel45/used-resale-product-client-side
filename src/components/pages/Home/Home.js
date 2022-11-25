import React from 'react';
import Advertise from '../advertiseItem/Advertise';
import Categories from '../categories/Categories';
import Category from '../categories/Category';
import Navbar from '../shared/Navbar';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <div>
           <h1>home page</h1>
           <Slider></Slider>
           <Advertise></Advertise>
           <Categories></Categories>
        </div>
    );
};

export default Home;