/** @format */

import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data.email,data.password);
  };
  return (
    <div className="h-[800px] flex justify-center items-center text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {})}
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
            {...register("password", {})}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="login"
          type="submit"
         />
      </form>
    </div>
  );
};

export default Login;
