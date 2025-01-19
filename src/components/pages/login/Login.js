/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Login = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { user, signIn, userLogin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const currentUsr = {
          email: user.email,
        };
        fetch("https://assignmet12-server-side.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUsr),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("secret-token", data.token);
          });
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/durantaDetails");
  };
  const handleGoogle = () => {
    userLogin()
      .then((result) => {
        const user = result.user;
        const currentUsr = {
          email: user.email,
        };
        fetch("https://assignmet12-server-side.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUsr),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("secret-token", data.token);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetch("https://assignmet12-server-side.vercel.app/admin")
      .then((res) => res.json())
      .then((da) => {
        setData(da[0]);
      });
  }, []);
  if (user?.email === data?.email) {
    localStorage.setItem("admin", data.admin);
  } else {
    localStorage.setItem("admin", 0);
  }
  return (
    <div className=" max-h-full mt-8 max-w-xs  flex justify-center items-center text-center card w-96 bg-base-100 mb-8 mx-auto  shadow-xl">
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
          className="btn bg-[#eab308] w-full mt-4"
          value="login"
          type="submit"
        />
        <div className="divider">OR</div>
        <Link>
          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full mt-4 mb-8">
            Continue With Google
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
