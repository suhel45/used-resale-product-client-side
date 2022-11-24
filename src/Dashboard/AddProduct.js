/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Product added successfully")
  };
  return (
    <div className="h-[1000px] w-[600px] flex justify-center items-center text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", {})}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Orginal Price</span>
          </label>
          <input
            type="text"
            {...register("price", {})}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">
              condition type(excellent, good, fair)
            </span>
          </label>
          <input
            type="text"
            {...register("condition", {
              required: "condition is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">
              Mobile Phone
            </span>
          </label>
          <input
            type="text"
            {...register("phone", {
              required: "Mobile phone is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">
             Location
            </span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "location is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">
              description
            </span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: "description is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    {" "}
    <span className="label-text">Resale Price</span>
  </label>
  <input
    type="text"
    {...register("resale", {
      required: "Resal price is required",
    })}
    className="input input-bordered w-full max-w-xs"
  />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    {" "}
    <span className="label-text">Years of use</span>
  </label>
  <input
    type="text"
    {...register("use", {
      required: "Years of use is required",
    })}
    className="input input-bordered w-full max-w-xs"
  />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    {" "}
    <span className="label-text">Seller Name</span>
  </label>
  <input
    type="text"
    {...register("sellerName", {
      required: "Seller name is required",
    })}
    className="input input-bordered w-full max-w-xs"
  />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    {" "}
    <span className="label-text">Date</span>
  </label>
  <input
    type="text"
    {...register("date", {
      required: "condition is required",
    })}
    className="input input-bordered w-full max-w-xs"
  />
</div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
