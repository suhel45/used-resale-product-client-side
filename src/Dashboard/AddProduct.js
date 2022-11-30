/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const AddProduct = () => {
  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const {name,price,condition,phone,location,resale,sellerName,date,description,use} = data;
    const imgKey = process.env.REACT_APP_imgbb_key;
    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image',image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgKey}`
    fetch(url,{
      method:'post',
      body:formData
    })
    .then(res=>res.json())
    .then(imgData=>{
      if(imgData.success){
        console.log(imgData.data.url);
        const product = {
          email:user?.email,
          image:imgData.data.url,
          name,
          price,
          condition,
          phone,
          location,
          resale,
          sellerName,
          date,
          description,
          use
        }
        fetch('https://assignmet12-server-side.vercel.app/products',{
          method:"post",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(product)
        })
        toast.success("Product added successfully");
        navigate('/dashboard/myproducts')
      }
    })
  };
  return (
    <div className="h-[1000px] w-[600px] flex justify-center items-center text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("photo", {})}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
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
            <span className="label-text">Mobile Phone</span>
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
            <span className="label-text">Location</span>
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
            <span className="label-text">description</span>
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
            defaultValue={Date()}
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
