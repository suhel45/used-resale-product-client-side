/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const SignUp = () => {
  const { createUser,updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {
    event.preventDefault();
    const option = event.target.option.value;
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("user create successfully");
        localStorage.setItem('user',option)

      }).then(() => {
        handleUpdateUserProfile(data.name);
        saveUser(data.name,data.email,option);
        navigate('/login')
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const handleUpdateUserProfile = (name) => {
    const profile = {
        displayName: name,
    }
  console.log(profile)
    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
}


const saveUser = (name,email,option)=>{

  const user = {
    name,
    email,
   role:option
  }
  console.log(user);
  fetch('https://assignmet12-server-side.vercel.app/users',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
}
  return (
    <div className=" max-h-full mt-8 max-w-xs  flex justify-center items-center text-center card w-96 bg-base-100 mb-8 
mx-auto  shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {})}
            className="input input-bordered w-full max-w-xs"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email Address is required",
            })}
            className="input input-bordered w-full max-w-xs"
            placeholder="Your Email"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
            })}
            className="input input-bordered w-full max-w-xs"
            placeholder="Your Password"
          />
        </div>
        <label className="label">
          {" "}
          <span className="label-text">Select a Option</span>
        </label>
        <select name="option" className="select select-accent w-full max-w-xs">
          <option>User</option>
          <option>Seller</option>
        </select>
        <p><small>Already have an account please <Link className="text-success" to={"/login"}>login</Link> </small></p>
        <input
          className="btn bg-[#eab308] w-full mt-4 mb-8"
          value="SignUp"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
