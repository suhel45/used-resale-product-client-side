/** @format */

import React from "react";
import "./Advertisment.css";

const AdvertismentDetails = ({ data }) => {
  const { img } = data;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img class="image-area" src={img} alt="Cycle" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertismentDetails;
