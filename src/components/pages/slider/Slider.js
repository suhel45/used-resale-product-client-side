/** @format */

import React from "react";
import Lottie from "react-lottie";
import lottie from "react-lottie";
import { Link } from "react-router-dom";
import data from "../../../asset/cycle.json";

const Slider = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie options={defaultOptions} />
        <div>
          <h1 className="text-5xl font-bold capitalize">
            <span className="text-primary">buy</span> and{" "}
            <span className="text-primary">sell</span> your product
          </h1>
          <p className="py-4 ">
          Excellent platform to buy and sell second hand goods. It is easy to buy and sell various category product at low budget.
          </p>
          <div className="flex justify-center mt-3">
          <Link to={'/durantaDetails'}>
          <button className="btn btn-primary px-5">Buy Now</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
