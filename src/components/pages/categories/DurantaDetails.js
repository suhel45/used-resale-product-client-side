/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import DurantaAllDetails from "./DurantaAllDetails";

const DurantaDetails = () => {
  const datas = useLoaderData();
  return (
    <div>
         <div className="text-2xl">Duranta Bi-Cycle</div>
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-5">
        {datas.map((data) => (
          <DurantaAllDetails key={data._id} data={data}></DurantaAllDetails>
        ))}
      </div>
    </div>
  );
};

export default DurantaDetails;
