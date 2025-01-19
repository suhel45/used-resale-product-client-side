/** @format */

import React, { useEffect, useState } from "react";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://assignmet12-server-side.vercel.app/duranta")
      .then((res) => res.json())
      .then((da) => setData(da));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div className="text-4xl">Product category</div>
      {data.map((d) => (
        <img src={d.img} key={d._id}></img>
      ))}
    </div>
  );
};

export default Category;
