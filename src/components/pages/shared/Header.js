/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <div className="navbar bg-[#183661] text-white sticky top-0 z-10 py-5 font-bold left-0 sm:left-0 md:max-w-screen ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bi-Cycle-Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/signup"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            {user?.uid && (
              <>
                <Link to={"/dashboard"}>
                  <button>Dashboard</button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <ul>
          <li>
            {user?.uid && (
              <>
                <Link>
                  <button className="btn bg-[#eab308]" onClick={handleLogOut}>
                    LogOut
                  </button>
                </Link>
              </>
            )}
            {!user?.uid && (
              <>
                <li>
                  <Link className="btn bg-[#eab308]" to={"/signup"}>
                   register
                  </Link>
                </li>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
