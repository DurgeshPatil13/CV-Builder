import React from 'react'
import './education.css'

import { FaGraduationCap } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useState } from 'react';
import { BiSolidSchool } from "react-icons/bi";


const Education = ({seteducation}) => {
const [education1,seteducation1]=useState
({
college: "",
  course: "",
  from: "",
  to: "",
});
function handleclick(e){
    e.preventDefault();
    seteducation(education1);

}
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
              onChange={(e)=>
seteducation1({
    ...education1,
    college:e.target.value,
})
}
              placeholder="Enter college name"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Course</label>
          <div className="input-box">
        
<BsBook />

        
        
            <input
             onChange={(e)=>
seteducation1({
    ...education1,
    course:e.target.value,
})
}
              type="text"
              placeholder="Enter course"
            />
          </div>
        </div>

        <div className="input-group">
          <label>From</label>
          <div className="input-box">
            <SlCalender />

            <input
             onChange={(e)=>
seteducation1({
    ...education1,
    from:e.target.value,
})
} type="text" placeholder="2024" />
          </div>
        </div>

        <div className="input-group">
          <label>To</label>
          <div className="input-box">
         <SlCalender />

            <input
             onChange={(e)=>
seteducation1({
    ...education1,
    to:e.target.value,
})
} type="text" placeholder="2028" />
          </div>
        </div>

        <button onClick={handleclick} className="submit-btn">
          Submit
        </button>

      </form>
    </div>
    

  )
}

export default Education