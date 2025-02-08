/** @format */

import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/pages/shared/Header";
import UseAdmin from "../components/Hooks/UseAdmin";
import { AuthContext } from "../Context/UserContext";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
    const data = UseAdmin();
    let isRole = false;
    isRole = data;
  return (
    <div>
      <Header ></Header>
      {user &&(<div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isRole === "User" && (
              <li>
                <Link to={"/dashboard/order"}>My Orders</Link>
              </li>
            )}
            {isRole === "Seller"  && (
              <>
                <li>
                  <Link to={"/dashboard/addproduct"}>Add a Product</Link>
                </li>
                <li>
                  <Link to={"/dashboard/myproducts"}>My Products</Link>
                </li>
              </>
            )}
            {isRole==='Admin' && (
              <>
                <li>
                  <Link to={"/dashboard/sellers"}>All sellers</Link>
                </li>
                <li>
                  <Link to={"/dashboard/buyers"}>All buyers</Link>
                </li>
                <li>
                  <Link>Reported items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>)}
    </div>
  );
};

export default DashboardLayout;
