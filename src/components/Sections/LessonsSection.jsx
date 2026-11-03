import React from 'react'
import './LessonsSection.css'
import One from '../../assets/1.png'
import Two from '../../assets/2.png'
import Three from '../../assets/3.png'
import Four from '../../assets/4.png'
import Five from '../../assets/5.png'
import Six from '../../assets/6.png'
import Seven from '../../assets/7.png'
import Eight from '../../assets/8.png'

const LessonSection = () => {
  return (
    <div className="EnkeDiv">
      <h1 className='Qualify'>Qualified lessons for students</h1>
      <p className='A'>A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.</p>
      <div className='ButonDivi'>
        <button className='btn btn1'>Kindergarten</button>
        <button className='btn Ferqbtn'>High School</button>
        <button className='btn btn2'>College</button>
      </div>
      <div className='EsasDiv'>
        <div className='Ilkdordlu'>
          <div className='B div'>
            <img className='Sek' src={One} alt="" />
            <h1 className='Stanh1'>Standard One</h1>
            <p className='Standard'>Standard 1 is a foundation Standard that reflects 7 important concepts...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
          <div className='B div'>
            <img className='Sek' src={Two} alt="" />
            <h1 className='Stanh1'>Standard Two</h1>
            <p className='Standard2'>Standard 2 builds on the foundations of Standard 1 and includes requirements...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
          <div className='B div'>
            <img className='Sek' src={Three} alt="" />
            <h1 className='Stanh1'>Standard Three</h1>
            <p className='Standard3'>Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
          <div className='B div'>
            <img className='Sek' src={Four} alt="" />
            <h1 className='Stanh1'>Standard Four</h1>
            <p className='Standard4'>Standard 4 of the Aged Care Quality Standards focuses on services and supports...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
        </div>
        <div className='ikinciDordlu'>
          <div className='B div'>
            <img className='Sek' src={Five} alt="" />
            <h1 className='Stanh1'>Standard Five</h1>
            <p className='Standard5'>Standard 5 Learning Resources. Learning Resources ensure that the school has the...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
          <div className='B div'>
            <img className='Sek' src={Six} alt="" />
            <h1 className='Stanh1'>Standard Six</h1>
            <p className='Standard5'>Standard 6 requires an organisation to have a system to resolve complaints...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
          <div className='B div'>
            <img className='Sek' src={Seven} alt="" />
            <h1 className='Stanh1'>Standard Seven</h1>
            <p className='Standard5'>Standard 7 Blood Management mandates that leaders of health service organisations...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
          <div className='B div'>
            <img className='Sek' src={Eight} alt="" />
            <h1 className='Stanh1'>Standard Eight</h1>
            <p className='Standard5'>Standard 8 Course from NCERT Solutions help students to understand...</p>
            <button className='ClassDetails'>Class Details</button>
          </div>
        </div>
      </div>
      <button className='btn3'>Visit More Classes</button>
    </div>
  )
}

export default LessonSection