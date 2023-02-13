/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DurantaCategoryDetails from "./DurantaCategoryDetails";

const DurantaCategory = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("https://assignmet12-server-side.vercel.app/duranta")
      .then((res) => res.json())
      .then((da) => setData(da));
  }, []);
  return (
    <div className=" lg:flex lg:justify-evenly">
      <Link to={"/durantaDetails"} >
      <div className="card w-96 bg-base-100 mb-8 mx-auto  shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcQjRkbRCX7fSujky3HxHuXYoyMGlxwp6K6NYA&usqp=CAU"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-3xl font-bold">Duranta</h2>
    </div>
  </div>
      </Link>
      <Link to={"/heroDetails"}>
      <div className="card w-96 bg-base-100 mx-auto  mb-8 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src="https://i.ibb.co/ZHLVMVC/download11.jpg"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-3xl font-bold">Hero </h2>
    </div>
  </div>
      </Link>
      <Link to='/phoenixDetails' >
      <div className="card w-96 bg-base-100 mx-auto mb-8 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIO-JqcUCwloweGZDSNZBxVEFv9nisIyEsQ&usqp=CAU"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-3xl font-bold">Phoenix </h2>
    </div>
  </div>
      </Link>
    </div>
  );
};

export default DurantaCategory;
