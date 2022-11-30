/** @format */

import React from "react";
import img1 from '../../../asset/images (1).jpg'
import img2 from '../../../asset/download.jpg'
import img3 from '../../../asset/images.jpg'

const Slider = () => {
  return (
    <div className="w-3/4 mx-auto carousel rounded-box">
      <div className="carousel-item">
        <img src={img1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img className="w-full h-[400px]" src={img2} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={img3} alt="Burger" />
      </div>
    </div>
  );
};

export default Slider;
