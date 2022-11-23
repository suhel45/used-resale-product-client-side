import React from 'react';
import Advertise from '../advertiseItem/Advertise';
import Category from '../categories/Category';
import Navbar from '../shared/Navbar';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <div>
           <h1>home page</h1>
           <Slider></Slider>
           <Advertise></Advertise>
           <Category></Category>
        </div>
    );
};

export default Home;