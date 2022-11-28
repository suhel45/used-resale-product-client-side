/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link to={'/dashboard/order'}>My Orders</Link>
          </li>
          <li>
            <Link to={"/dashboard/addproduct"}>Add a Product</Link>
          </li>
          <li>
            <Link>My Products</Link>
          </li>
          <li>
            <Link>My buyers</Link>
          </li>
          <li>
            <Link to={'/dashboard/sellers'} >All sellers</Link>
          </li>
          <li>
            <Link to={'/dashboard/buyers'}>All buyers</Link>
          </li>
          <li>
            <Link>Reported items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
