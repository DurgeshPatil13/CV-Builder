import Personalinfo from './components/personal-info'
import './App.css'
import Header from './components/header'
import Education from './components/education'
import Skills from './components/skills'
import Experience from './components/experience'
function App() {
  return (
  <div className='main-container'>
{/* left section  */}
<div className='left-section'>
<Header />
<Personalinfo/>
<Education/>
<Experience/>
<Skills/>
</div>
{/* right section  */}
<div className='right-section'>

</div>


    </div>
  )
}

export default App
