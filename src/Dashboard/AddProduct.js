/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const {
      name,
      price,
      condition,
      phone,
      location,
      resale,
      sellerName,
      date,
      description,
      use,
    } = data;

    const imgKey = process.env.REACT_APP_imgbb_key;
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgKey}`;
    fetch(url, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            email: user?.email,
            img: imgData.data.url,
            category: name,
            orginalPrice: price,
            condition,
            phone,
            location,
            resalePrice: resale,
            sellerName,
            date,
            description,
            use,
          };

          fetch("https://assignmet12-server-side.vercel.app/products", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          });

          toast.success("Product added successfully");
          navigate("/dashboard/myproducts");
        }
      });
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-6 rounded-xl shadow-xl mt-8 mb-8 max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Add a New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* File Upload */}
        <div className="flex flex-col">
          <label className="font-medium">Product Image</label>
          <input
            type="file"
            {...register("photo", {})}
            className="file-input file-input-bordered w-full mt-2"
            required
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <label className="font-medium">Product Name</label>
          <input
            type="text"
            {...register("name", {})}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>

        {/* Price & Condition */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Original Price</label>
            <input
              type="text"
              {...register("price", {})}
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Condition</label>
            <select
              {...register("condition", { required: "Condition is required" })}
              className="select select-bordered w-full mt-2">
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
        </div>

        {/* Phone & Location */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Mobile Phone</label>
            <input
              type="text"
              {...register("phone", { required: "Phone is required" })}
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Location</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full mt-2"
            rows="3"></textarea>
        </div>

        {/* Resale Price & Usage Years */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Resale Price</label>
            <input
              type="text"
              {...register("resale", { required: "Resale price is required" })}
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Years of Use</label>
            <input
              type="text"
              {...register("use", { required: "Usage duration is required" })}
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        {/* Seller Name & Date */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Seller Name</label>
            <input
              type="text"
              {...register("sellerName", {
                required: "Seller name is required",
              })}
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Date</label>
            <input
              type="text"
              defaultValue={Date()}
              {...register("date", { required: "Date is required" })}
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary w-full mt-4">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
