import './maincard.css'
import React from 'react'

const Maincard = ({personal,education,experience,skills}) => {
  return (
    
 <div className="cv-card">

      {/* Header */}
      <div className="cv-header">

        <div className="circle"></div>

        <h1>
 {personal.fullName}
        </h1>

        <div className="contact">

          <div className="contact-item">
      
            <span>{personal.email}</span>
          </div>

          <div className="contact-item">
          
            <span>{personal.phone}</span>
          </div>

          <div className="contact-item">
           
            <span>{personal.location}</span>
          </div>

        </div>

      </div>

      {/* Body */}

      <div className="cv-body">

        {/* Education */}

        <section>

          <div className="section-title">
            <span>EDUCATION</span>
            <div className="line"></div>
          </div>

          <h3>{education.college}</h3>
          <p>{education.course}</p>
          <small>{education.from} — {education.to}</small>

        </section>

        {/* Experience */}

        <section>

          <div className="section-title">
            <span>EXPERIENCE</span>
            <div className="line"></div>
          </div>

          <h3>{experience.company}</h3>
          <p>{experience.jobtitle}</p>
          <small>{experience.from} — {experience.to}</small>

          <blockquote>
           {experience.description}
          </blockquote>

        </section>

        {/* Skills */}

        <section>

          <div className="section-title">
            <span>SKILLS</span>
            <div className="line"></div>
          </div>

          <div className="skills">
{skills.map((skill) =>
 <span>{skill}</span>
)}
       
      {/* <span>Git & GitHub</span> */}
          </div>

        </section>

      </div>

    </div>

  )
}



export default Maincard