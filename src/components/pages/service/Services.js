/** @format */

import React from "react";

const Services = () => {
  return (
    <div>
        <div className="text-3xl mt-6 ">Our Services</div>
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-5 mt-12 shadow-xl">
        <div className="card mx-auto bg-base-100 ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">1.Buy And Sell Product</h2>
          </div>
        </div>
        <div className="card mx-auto bg-base-100 ">
          <div className="card-body items-center text-center">
            <h2 className="card-title justify-center items-center">2.Advertise a Product</h2>
          </div>
        </div>
        <div className="card mx-auto bg-base-100 ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">3.Add a Product</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
