/** @format */

import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellersdata, setSellerData] = useState([]);

  useEffect(() => {
    fetch("https://assignmet12-server-side.vercel.app/sellers",{
      headers:{
        authorization:`Bearer ${localStorage.getItem('secret-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setSellerData(data));
  }, [sellersdata]);

  const handleDelete = (id)=>{
  fetch(`https://assignmet12-server-side.vercel.app/sellers/${id}`,{
    method:'DELETE',
    headers:{
      authorization:`Bearer ${localStorage.getItem('secret-token')}`
    }
  })

 }


  return (
    <div className="overflow-x-auto ">
      <table className="table max-w-full mx-auto">
        <thead>
          <tr>
            <th className="text-sm"></th>
            <th className="text-sm">Name</th>
            <th className="text-sm">Email</th>
            <th className="text-sm">Action</th>
          </tr>
        </thead>
        <tbody >
            {
                sellersdata.map((data,i)=><tr key={data._id}>
                    <th className="text-sm">{i+1}</th>
                    <td className="text-sm">{data.name}</td>
                    <td className="text-sm">{data.email}</td>
                    <td className="text-sm"><button onClick={()=>handleDelete(data._id)} className="btn btn-sm">Delete</button></td>
                  </tr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
