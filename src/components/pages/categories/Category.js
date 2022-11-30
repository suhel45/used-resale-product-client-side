import React, { useEffect, useState } from 'react';

const Category = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://assignmet12-server-side.vercel.app/duranta')
        .then(res=>res.json())
        .then(da=>setData(da))
    },[])
    return (
        <div>
           <div className="text-4xl">Product category</div> 
           {
            data.map(d=><img src={d.img} key={d._id}></img>)
           }
        </div>
    );
};

export default Category;