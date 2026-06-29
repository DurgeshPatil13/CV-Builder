import React from 'react'
import './education.css'

import { FaGraduationCap } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

import { BiSolidSchool } from "react-icons/bi";


const Education = () => {
  return (
     <div className="education-card">
      <div className="card-header">
        <div className="title">
          <div className="icon-box">
         <FaGraduationCap />

          </div>
          <h2>Education</h2>
        </div>
      </div>

      <form className="education-form">

        <div className="input-group">
          <label>College</label>
          <div className="input-box">
        <BiSolidSchool />

            <input
              type="text"
              placeholder="Enter college name"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Course</label>
          <div className="input-box">
        
<BsBook />

        
        
            <input
              type="text"
              placeholder="Enter course"
            />
          </div>
        </div>

        <div className="input-group">
          <label>From</label>
          <div className="input-box">
            <SlCalender />

            <input type="text" placeholder="2024" />
          </div>
        </div>

        <div className="input-group">
          <label>To</label>
          <div className="input-box">
         <SlCalender />

            <input type="text" placeholder="2028" />
          </div>
        </div>

        <button className="submit-btn">
          Submit
        </button>

      </form>
    </div>
    

  )
}

export default Education