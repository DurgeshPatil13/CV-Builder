import React from 'react'
import './skills.css'
import { FaCode } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const Skills = () => {
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

      <form className="skills-form">
        <div className="input-group">
          <label>Skill</label>
          <div className="input-box">
    <FaLightbulb />

            <input
              type="text"
              placeholder="e.g. React, JavaScript, CSS"
            />
          </div>
        </div>

        <button className="submit-btn">
          Add Skill
        </button>
      </form>
    </div>
  )
}

export default Skills