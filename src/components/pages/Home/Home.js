import React from 'react';
import Advertise from '../advertiseItem/Advertise';
import Categories from '../categories/Categories';
import Category from '../categories/Category';
import Navbar from '../shared/Navbar';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Advertise></Advertise>
           <Categories></Categories>
           <Categories></Categories>
           <Categories></Categories>
        </div>
    );
};

export default Home;