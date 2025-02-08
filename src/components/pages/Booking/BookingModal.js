/** @format */

import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";

const BookingModal = ({ data, clicked, setClicked }) => {
  const { _id, category, resalePrice } = data;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const booking = {
      category: form.category.value,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      price: form.price.value,
      location: form.location.value,
    };

    fetch("https://assignmet12-server-side.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking confirmed");
          setClicked(false); // Close modal after successful booking
          document.getElementById("booking-modal").checked = false; // Close modal manually
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      {/* Checkbox-Based Modal */}
      <input
        type="checkbox"
        id="booking-modal"
        className="modal-toggle"
        checked={clicked}
        readOnly
      />

      <div className="modal">
        <div className="modal-box relative">
          {/* Close Button */}
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setClicked(false)}>
            ✕
          </label>

          {/* Form */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="category"
              type="text"
              disabled
              defaultValue={category}
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              disabled
              defaultValue={resalePrice}
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Your location"
              className="input w-full input-bordered"
              required
            />
            <br />
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
