import React from 'react'

// import css
import '../componantStyle/home.css'

//import assets
import download from '../assets/Download.svg'
import profile from '../assets/profilePic.svg'

//import componant
import SchrollDown from './SchrollDown'
import ZB from './ZB'

export default function Home({ scrollToSection, section }) {

  return (
    <div className='homeContainer'>
      <div className='insideHomeContainer'>
          <div className='insideHome'>
            <div className='insideHomeText'> 
                <div className='homeTextGras'>
                    <p id='name'>Hi, I’m ALI ZIANE Hassane </p>
                    <p id='work'>Junior Developer</p>
                </div>
                <div className='txtDownlaod'>
                    <div className='homeTextRegular'>
                        <p>As a computer science master's degree holder with expertise in software engineering and data processing, I have gained experience in full-stack web and software development. </p>
                    </div>
                    
                </div>
            </div>
            <div className='insideHomePic'>
                <div id='cercileOfImage'>
                  <img src={profile} alt=''/>
                </div>
            </div>
          </div>

         
      </div>

      
      <ZB top="-7.5vw" right="-15.5vw"/>

      <SchrollDown bottom="5vw" scrollToSection={scrollToSection} section = {section}/>

    </div>
  )
}
