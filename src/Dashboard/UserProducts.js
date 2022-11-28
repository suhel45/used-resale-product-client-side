import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';

const UserProducts = () => {
    const [products,setProducts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[user?.email])
    return (
        <div>
            <h1>my products</h1>
        </div>
    );
};

export default UserProducts;