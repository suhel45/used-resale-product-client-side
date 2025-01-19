/** @format */

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/UserContext";
import DurantaAllDetails from "../categories/DurantaAllDetails";
import AdvertismentDetails from "./AdvertismentDetails";

const Advertise = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://assignmet12-server-side-1i3sy475o-suhel45s-projects.vercel.app/advertisment`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);
  console.log(products);
  return (
    <div className="mt-12 mb-10  container">
      <div className="mb-5 flex justify-center fw-bold">
        <h1 className="text-4xl font-bold">Our Advertisment</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((data) => (
          <DurantaAllDetails key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Advertise;
