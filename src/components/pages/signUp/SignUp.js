/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
      })
      .catch((e) => {
        console.log(e);
      });
      navigate('/login')
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
  fetch('http://localhost:5000/users',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
}
  return (
    <div className="h-[800px] flex justify-center items-center text-center">
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
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
            })}
            className="input input-bordered w-full max-w-xs"
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
        <input
          className="btn btn-accent w-full mt-4"
          value="SignUp"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
