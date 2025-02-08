/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { signIn, userLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await signIn(data.email, data.password);
      const user = result.user;

      const response = await fetch(
        "https://assignmet12-server-side.vercel.app/jwt",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        }
      );

      const responseData = await response.json();
      if (responseData.token) {
        localStorage.setItem("secret-token", responseData.token);
        toast.success("Login successful!");
        reset();
        navigate(from, { replace: true });
      } else {
        toast.error("Failed to authenticate.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid credentials. Try again.");
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await userLogin();
      const user = result.user;

      const response = await fetch(
        "https://assignmet12-server-side.vercel.app/jwt",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        }
      );

      const responseData = await response.json();
      if (responseData.token) {
        localStorage.setItem("secret-token", responseData.token);
        toast.success("Google login successful!");
        navigate(from, { replace: true });
      } else {
        toast.error("Failed to authenticate.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login failed. Try again.");
    }
  };

  return (
    <div className="max-h-full mt-8 max-w-xs flex justify-center items-center text-center card w-96 bg-base-100 mb-8 mx-auto shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Email Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-gray-700">Email</span>
          </label>
          <input
            type="email"
            autoComplete="off"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text text-gray-700">Password</span>
          </label>
          <input
            type="password"
            autoComplete="new-password"
            {...register("password", { required: "Password is required" })}
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Login Button */}
        <input
          className="btn bg-[#eab308] w-full mt-4 text-white hover:bg-yellow-600 transition-all"
          value="Login"
          type="submit"
        />

        <div className="divider my-4">OR</div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2">
          Continue With Google
        </button>

        {/* Sign Up Link */}
        <p className="mt-3 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
