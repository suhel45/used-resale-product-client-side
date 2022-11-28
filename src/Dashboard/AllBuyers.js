import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [sellersdata, setSellerData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/buyers")
        .then((res) => res.json())
        .then((data) => setSellerData(data));
    }, [sellersdata]);
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
                      <td><button className="btn btn-sm">Delete</button></td>
                    </tr>)
              }
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyers;