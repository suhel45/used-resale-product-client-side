/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const UserOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(user)

  useEffect(() => {
    fetch(`https://assignmet12-server-side.vercel.app/orders?email=${user?.email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('secret-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);
  return (
    <div className="overflow-x-auto mt-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product-Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={order._id}>
              <th>{i + 1}</th>
              <td>{order.category}</td>
              <td>{order.price}</td>
              <td>{order.location}</td>
              <td>{order.phone}</td>
              <td>
                {
                  order.price && !order.paid && 
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-primary btn-xs">pay</button>
                    </Link>
                }
                {
                  order.price && order.paid &&
                  <span className="btn btn-secondary btn-xs">paid</span>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;
