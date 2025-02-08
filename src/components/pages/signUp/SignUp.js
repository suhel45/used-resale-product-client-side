/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const option = event.target.option.value;

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User created successfully!");
      })
      .then(() => {
        handleUpdateUserProfile(data.name);
        saveUser(data.name, data.email, option);
        reset({ name: "", email: "", password: "" });
        navigate("/login");
      })
      .catch((e) => {
        console.error(e);
        toast.error("Error creating user. Please try again.");
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email, option) => {
    const user = {
      name,
      email,
      role: option,
    };
    fetch("https://assignmet12-server-side.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Your Password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-700">
              Select a Role
            </label>
            <select name="option" className="select select-bordered w-full">
              <option value="User">User</option>
              <option value="Seller">Seller</option>
            </select>
          </div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>

          <button
            type="submit"
            className="btn bg-[#eab308] w-full mt-6 py-2 text-white font-semibold rounded-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
