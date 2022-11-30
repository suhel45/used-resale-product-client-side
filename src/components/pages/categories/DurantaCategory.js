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
    <div>
        <div className="text-2xl">Duranta Bi-Cycle</div>
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-5">
        {datas.slice(0, 2).map((data) => (
          <DurantaCategoryDetails
            key={data._id}
            data={data}></DurantaCategoryDetails>
        ))}
       </div>
      <Link to={'/durantaDetails'}><button className="btn btn mt-4 mb-4">see all</button></Link>
    </div>
  );
};

export default DurantaCategory;
