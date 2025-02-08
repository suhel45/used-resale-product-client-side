
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
    <div className="navbar bg-[#183661] text-white sticky top-0 z-10 py-4 px-4 z-50 relative">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu (Hidden on Large Screens) */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            {user?.uid && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bi-Cycle Store
        </Link>
      </div>

      {/* Navbar Center (Hidden on Small Screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          {!user && (<li>
            <Link to={"/signup"}>Register</Link>
          </li>)}
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          {user?.uid && (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar End (User Actions) */}
      <div className="navbar-end">
        {user?.uid ? (
          <button
            className="btn bg-[#eab308] text-black"
            onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <Link className="btn bg-[#eab308] text-black" to={"/signup"}>
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
