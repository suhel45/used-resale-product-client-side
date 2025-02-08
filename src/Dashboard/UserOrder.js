/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import toast from "react-hot-toast";

const UserOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://assignmet12-server-side.vercel.app/orders?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("secret-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to fetch orders!");
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border p-3">#</th>
                <th className="border p-3">Product Name</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Location</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3 text-center">Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={order._id} className="hover:bg-gray-50 transition">
                  <td className="border p-3">{i + 1}</td>
                  <td className="border p-3">{order.category}</td>
                  <td className="border p-3">${order.price}</td>
                  <td className="border p-3">{order.location}</td>
                  <td className="border p-3">{order.phone}</td>
                  <td className="border p-3 text-center">
                    {order.price && !order.paid ? (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    ) : (
                      <span className="btn btn-secondary btn-sm cursor-not-allowed">
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserOrder;
