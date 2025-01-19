/** @format */

import React from "react";

const DurantaCategoryDetails = ({ data }) => {
  const {
    category,
    img,
    orginalPrice,
    condition,
    descriptin,
    resalePrice,
    use,
    date,
    location,
    phone,
  } = data;
  return (
    <div className="card card-compact  bg-warning shadow-xl">
      <figure>
        <img className="mt-5 bg-warning rounded  " src={img} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category}</h2>
        <p>{descriptin}</p>
        <p>
          Location: <span className="text-xl font-semibold">{location}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default DurantaCategoryDetails;
