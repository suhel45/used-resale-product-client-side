/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import DurantaAllDetails from "./DurantaAllDetails";

const PhoenixDetails = () => {
  const datas = useLoaderData();
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {datas.map((data) => (
          <DurantaAllDetails key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PhoenixDetails;
