/** @format */

import React from "react";
import image from "../../../asset/404-error-page-templates.jpg";

const ErrorPage = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
    </div>
  );
};

export default ErrorPage;
