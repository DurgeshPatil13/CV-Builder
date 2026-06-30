import React from 'react'
import './experience.css'
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegBuilding } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { useState } from 'react';
import { FaCalendarDays } from "react-icons/fa6";

const Experience = ({setexperience}) => {
    const [exp,setexp]=useState({
    company:"",
  jobtitle:"",
  from:"",
  to:"",
  description:"",      
    });
    function handleclick(e){
        e.preventDefault();
        setexperience(exp);

    }
  return (
  <div className="experience-card">
      <div className="card-header">
        <div className="title">
          <div className="icon-box">
                 <HiOutlineBriefcase />
          </div>
          <h2>Experience</h2>
        </div>
      </div>

      <form className="experience-form">

        <div className="input-group">
          <label>Company</label>
          <div className="input-box">
       <FaRegBuilding />
  <input
            onChange={(e)=>
                setexp({
                    ...exp,
                    company:e.target.value,
                })

            }
              type="text"
              placeholder="Company Name"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Job Title</label>
          <div className="input-box">
   <FaUserTie />


            <input
             onChange={(e)=>
                setexp({
                    ...exp,
                    jobtitle:e.target.value,
                })

            }
              type="text"
              placeholder="Frontend Developer"
            />
          </div>
        </div>

        <div className="input-group">
          <label>From</label>
          <div className="input-box">
  <FaCalendarDays />

            <input 
             onChange={(e)=>
                setexp({
                    ...exp,
                    from:e.target.value,
                })

            } type="month" />
          </div>
        </div>

        <div className="input-group">
          <label>To</label>
          <div className="input-box">
          <FaCalendarDays />

            <input 
             onChange={(e)=>
                setexp({
                    ...exp,
                    to:e.target.value,
                })

            } type="month" />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Description</label>
          <div className="textarea-box">
         <FaFileLines />

            <textarea 
             onChange={(e)=>
                setexp({
                    ...exp,
                    description:e.target.value,
                })

            }
              placeholder="Describe your responsibilities..."
            ></textarea>
          </div>
        </div>

        <button onClick={handleclick} className="submit-btn">
          Add Experience
        </button>

      </form>
    </div>
  )
}

export default Experience