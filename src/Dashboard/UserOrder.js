/** @format */

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const UserOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;