/** @format */

import React from "react";
import Advertise from "../advertiseItem/Advertise";
import Categories from "../categories/Categories";
import Category from "../categories/Category";
import Services from "../service/Services";
import Navbar from "../shared/Navbar";
import Slider from "../slider/Slider";
import { useLoaderData } from "react-router-dom";
import DurantaAllDetails from "../categories/DurantaAllDetails";

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div className="mt-10">
        <h1 className="mx-10 text-xl">For You</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {datas?.map((data) => (
            <DurantaAllDetails key={data._id} data={data} />
          ))}
        </div>
      </div>
      <Categories></Categories>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;
