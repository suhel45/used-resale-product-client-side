/** @format */

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserContext, { AuthContext } from "../../../Context/UserContext";
import BookingModal from "../Booking/BookingModal";

const DurantaAllDetails = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  const [bookData, setBookData] = useState({});

  const saveData = (data) => {
    setBookData(data);
    setClicked(true);
  };
  const {
    _id,
    category,
    img,
    orginalPrice,
    condition,
    resalePrice,
    use,
    date,
    location,
    phone,
  } = data;
  return (
    <div>
      <div
        key={_id}
        className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <figure className="h-48 w-full ">
          <img className="h-full w-full object-cover" src={img} alt="Item" />
        </figure>
        <div className="card-body p-6">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">{category}</h2>
            <div>
              <span className="font-semibold text-gray-600">Price:</span>{" "}
              <span className="text-green-600 font-bold">{resalePrice}$</span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">
                Regular Price:
              </span>{" "}
              <del className="text-red-500">{orginalPrice}$</del>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Quality:</span>{" "}
              {condition}
            </div>
            <div>
              <span className="font-semibold text-gray-600">Location:</span>{" "}
              {location}
            </div>
          </div>
          <div className="mt-6">
            {user?.email ? (
              <label
                htmlFor="booking-modal"
                onClick={() => saveData(data)}
                className="btn btn-primary w-full py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-200">
                Book Now
              </label>
            ) : (
              <Link
                className="btn btn-primary w-full py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
                to="/login">
                Book Now
              </Link>
            )}
          </div>
        </div>
      </div>

      {clicked && (
        <BookingModal
          data={bookData}
          clicked={clicked}
          setClicked={setClicked}
        />
      )}
    </div>
  );
};

export default DurantaAllDetails;
