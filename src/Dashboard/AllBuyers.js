/** @format */

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignmet12-server-side.vercel.app/buyers", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBuyers(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch buyers!");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this buyer?"
    );
    if (!confirmDelete) return;

    fetch(`https://assignmet12-server-side.vercel.app/buyers/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Buyer deleted successfully!");
          setBuyers(buyers.filter((buyer) => buyer._id !== id));
        }
      })
      .catch(() => toast.error("Failed to delete buyer"));
  };

  return (
    <div className="overflow-x-auto mt-6 container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">All Buyers</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-white p-4">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border p-3">#</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {buyers.length > 0 ? (
                buyers.map((buyer, i) => (
                  <tr key={buyer._id} className="hover:bg-gray-50 transition">
                    <td className="border p-3">{i + 1}</td>
                    <td className="border p-3">{buyer.name}</td>
                    <td className="border p-3">{buyer.email}</td>
                    <td className="border p-3 text-center">
                      <button
                        onClick={() => handleDelete(buyer._id)}
                        className="btn btn-error btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No buyers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBuyers;
