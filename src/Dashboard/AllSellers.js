/** @format */

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignmet12-server-side.vercel.app/sellers", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch sellers!");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this seller?");
    if (!confirmDelete) return;

    fetch(`https://assignmet12-server-side.vercel.app/sellers/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Seller deleted successfully!");
          setSellers(sellers.filter((seller) => seller._id !== id));
        }
      })
      .catch(() => toast.error("Failed to delete seller"));
  };

  return (
    <div className="overflow-x-auto mt-6 container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">All Sellers</h2>

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
              {sellers.length > 0 ? (
                sellers.map((seller, i) => (
                  <tr key={seller._id} className="hover:bg-gray-50 transition">
                    <td className="border p-3">{i + 1}</td>
                    <td className="border p-3">{seller.name}</td>
                    <td className="border p-3">{seller.email}</td>
                    <td className="border p-3 text-center">
                      <button
                        onClick={() => handleDelete(seller._id)}
                        className="btn btn-error btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No sellers found.
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

export default AllSellers;
