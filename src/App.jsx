import Personalinfo from './components/personal-info'
import './App.css'
import Header from './components/header'
import Education from './components/education'
import Skills from './components/skills'
import Experience from './components/experience'
import Maincard from './components/maincard'
import { useState } from 'react'
function App() {
const [personal, setPersonal] = useState({
  fullName: "",
  email: "",
  phone: "",
  location: "",
});
const [education, seteducation] = useState({
  college: "",
  course: "",
  from: "",
  to: "",
});
const [experience,setexperience]=useState({
  company:"",
  jobtitle:"",
  from:"",
  to:"",
  description:"",
});
const [skills,setskills]=useState([])
  return (
  <div className='main-container'>
{/* left section  */}
<div className='left-section'>
<Header />
<Personalinfo setPersonal={setPersonal}  />
<Education seteducation={seteducation}/>
<Experience setexperience={setexperience} />
<Skills setskills={setskills}/>
</div>
{/* right section  */}
<div className='right-section'>
<div className='live'>Live Preview  → </div>
<Maincard skills={skills} personal={personal} experience={experience} education={education} />
</div>

    </div>
  )
}

export default App
