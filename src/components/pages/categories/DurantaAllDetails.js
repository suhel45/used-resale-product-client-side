/** @format */

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserContext, { AuthContext } from "../../../Context/UserContext";
import BookingModal from "../Booking/BookingModal";

const DurantaAllDetails = ({ data }) => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const [clicked, setClicked] = useState(false);
  const [bookData, setBookData] = useState({});

  const saveData = () => {
    setBookData(data);
    setClicked(true);
    // console.log(bookData);
  };

  // console.log(bookData);

  // console.log(data);
  const {
    _id,
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
  // console.log(_id)
  return (
    <div className="card lg:card-side md:card-side bg-base-100 shadow-xl mb-8 lg:w-3/4 lg:mx-auto md:w-3/4 md:mx-auto">
      <figure>
        <img
          className="lg:h-full lg:w-full md:max-h-full md:max-w-full mx-10  sm:mx-5 "
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body ">
        <div className="mx-10 sm:mx-10">
          <h2 className="text-3xl font-bold">{category}</h2>
          <p>
            <span className="text-xl font-bold">Price:</span> {resalePrice}$
          </p>
          <p>
            <span className="text-xl font-bold">Regular Price:</span>
            <del>{orginalPrice}$</del>
          </p>
          <p>
            <span className="text-xl font-bold">Qulity:</span> {condition}
          </p>
          <p>
            <span className="text-xl font-bold">Used:</span> {use} Years
          </p>
          <p>
            <span className="text-xl font-bold">Location:</span> {location}{" "}
          </p>
          <p>
            <span className="text-xl font-bold">Contact:</span> {phone}{" "}
          </p>
          <p>
            <span className="text-xl font-bold">Post on:</span> {date}{" "}
          </p>
         {user?.email ?
         <>
          <label htmlFor="booking-modal"  onClick={saveData} className="btn btn-primary }
{md:mb-14">Book now</label>
         </>
         :
         <><Link className="btn btn-primary" to={"/login"}>Book Now</Link></>
          }
        </div>
      </div>
      {clicked && <BookingModal data={bookData} clicked={clicked} setClicked={setClicked}/>}
    </div>
  );
};

export default DurantaAllDetails;
