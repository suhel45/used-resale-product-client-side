/** @format */

import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";

const BookingModal = ({data, clicked, setClicked}) => {
  const [bookData, setBookData] = useState({})

    const {_id,category,resalePrice} = data;
    const {user} = useContext(AuthContext);

    console.log(data);

    // useEffect(() => {
      // fetch(`https://assignmet12-server-side.vercel.app/duranta/${_id}`).then((res) => {
        // return res.json()
      // }).then((data) => {
        // console.log(data);
      // })
    // })

    const handleBooking = (event)=>{
        event.preventDefault()
        const form = event.target;
        const category = form.category.value;
        const price = form.price.value;
        const name = form.name.value
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        form.reset();
        const booking = {
            category: category,
            name: name,
            email,
            phone,
            price,
            location
        }
        
          fetch("https://assignmet12-server-side.vercel.app/bookings",{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(booking)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if (data.acknowledged) {
              toast.success('Booking confirmed');
          }
          else{
              toast.error(data.message);
          }
          })
    }
  return (
    <>
    
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setClicked(false)}>
            ✕
          </label>
                    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="category" type="text" disabled defaultValue={category}
                        className="input w-full input-bordered " />
                        <input name="price" type="text" disabled defaultValue={resalePrice} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Your location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
        </div>
        {/* <p>{data.category}</p> */}
      </div>
    </>
  );
};

export default BookingModal;
