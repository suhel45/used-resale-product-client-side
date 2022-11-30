import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';

const UserProducts = () => {
    const [products,setProducts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`https://assignmet12-server-side.vercel.app/products?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[user?.email])
    return (
        <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product-Name</th>
              <th>orginal price</th>
              <th>resale price</th>
              <th>used</th>
              <th>phone</th>
              <th>Action</th>
              <th>Advertise</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.resale}</td>
                <td>{product.use}</td>
                <td>{product.phone}</td>
                <td><button className='btn btn-xs bg-orange-500'>Delete</button></td>
                <td><button className='btn btn-xs'>Advertise</button></td>
                <td><button className=''>unsold</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default UserProducts;