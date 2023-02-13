/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import DurantaAllDetails from "./DurantaAllDetails";

const DurantaDetails = () => {
  const datas = useLoaderData();
  return (
    <div className="mt-10">
      <div className=" grid lg:grid-cols md:grid-cols  mt-8  md:w-full">
        {datas.map((data) => (
          <DurantaAllDetails key={data._id} data={data}/>
        ))}
      </div>
    </div>
  );
};

export default DurantaDetails;
