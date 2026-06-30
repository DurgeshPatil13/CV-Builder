import React from 'react'
import './skills.css'
import { FaCode } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { useState } from 'react';
const Skills = ({setskills}) => {
    const [skill,setskill]=useState([])
    function handelclick(e){
        e.preventDefault();
 
  setskills (  (prevSkills) => [
    ...prevSkills,
    skill
  ]);

    }
  return (
   
    <div className="skills-card">
      <div className="card-header">
        <div className="title">
          <div className="icon-box">
         <FaCode />

          </div>
          <h2>Skills</h2>
        </div>
      </div>

      <form  className="skills-form">
        <div className="input-group">
          <label>Skill</label>
          <div className="input-box">
    <FaLightbulb />

            <input 
            onChange={(e)=>
                setskill(
                    e.target.value,
            )
            }

              type="text"
              placeholder="e.g. React, JavaScript, CSS"
            />
          </div>
        </div>

        <button onClick={handelclick} className="submit-btn">
          Add Skill
        </button>
      </form>
    </div>
  )
}

export default Skills