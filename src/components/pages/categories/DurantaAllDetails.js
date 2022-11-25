/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Booking/BookingModal";

const DurantaAllDetails = ({ data }) => {
  console.log(data);
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
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category}</h2>
        <div className="flex justify-items-center items-center">
          <p>Orginal Price: </p>
          <h4 className="text-xl font-semibold">${orginalPrice}</h4>
        </div>
        <div className="flex justify-items-center items-center">
          <p>Condition: </p>
          <h4 className="text-xl font-semibold">{condition}</h4>
        </div>
        <p>{descriptin}</p>
        <p>
          Used: <span className="text-xl font-semibold">{use}years</span>{" "}
        </p>
        <p>
          ResalePrice:{" "}
          <span className="text-xl font-semibold">${resalePrice}</span>{" "}
        </p>
        <p>
          Location: <span className="text-xl font-semibold">{location}</span>{" "}
        </p>
        <p>
          Contact: <span className="text-xl font-semibold">{phone}</span>{" "}
        </p>
        <div className="card-actions justify-end">
          <label  htmlFor="booking-modal" className="btn btn-primary">
            Book Now
          </label>
        </div>
      </div>
      <BookingModal></BookingModal>
    </div>
  );
};

export default DurantaAllDetails;
