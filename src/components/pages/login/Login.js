/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Login = () => {
  const { signIn,userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("user login successfully ");
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  const handleGoogle = ()=>{
    userLogin()
    .then(result=>{
      const user = result.user;
      console.log(user)
      navigate('/')
    })
    .catch(e=>console.log(e))
  }
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
        <div className="divider">OR</div>
        <Link>
        <button onClick={handleGoogle}  className="btn btn-outline w-full mt-4">Continue With Google</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
