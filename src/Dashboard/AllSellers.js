/** @format */

import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellersdata, setSellerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sellers",{
      headers:{
        authorization:`Bearer ${localStorage.getItem('secret-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setSellerData(data));
  }, [sellersdata]);

  const handleDelete = (id)=>{
  fetch(`http://localhost:5000/sellers/${id}`,{
    method:'DELETE',
    headers:{
      authorization:`Bearer ${localStorage.getItem('secret-token')}`
    }
  })

 }


  return (
    <div className="overflow-x-auto mt-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                sellersdata.map((data,i)=><tr key={data._id}>
                    <th>{i+1}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td><button onClick={()=>handleDelete(data._id)} className="btn btn-sm">Delete</button></td>
                  </tr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
