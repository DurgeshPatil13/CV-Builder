import React from 'react'
import './personal-info.css'
import { FaRegUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useState } from 'react';
const Personalinfo = ({setPersonal}) => {
  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  location: "",
});
function handleSubmit(e) {
  e.preventDefault();
  setPersonal(formData);
}
    return (
    <div className="personal-card">
      <div className="card-header">
        <div className="title">
          <div className="icon-box">
          <FaRegUserCircle />

          </div>
          <h2>Personal Info</h2>
        </div>
      </div>

      <form className="personal-form" >
        <div className="input-group">
          <label>Full Name</label>
          <div className="input-box">
        <MdOutlineDriveFileRenameOutline />

            <input
              type="text"
              onChange={(e) =>
setFormData({
...formData,
fullName: e.target.value
})
}
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <div className="input-box">
    <MdAlternateEmail />

            <input
              type="email"
              onChange={(e) =>
setFormData({
...formData,
email: e.target.value
})}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <div className="input-box">
    <FaPhoneAlt />

            <input
              type="tel"
               onChange={(e) =>
setFormData({
...formData,
phone: e.target.value
})}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Location</label>
          <div className="input-box">
    <MdLocationOn />

            <input
              type="text"
               onChange={(e) =>
setFormData({
...formData,
location: e.target.value
})}
              placeholder="Enter your location"
            />
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}  className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Personalinfo