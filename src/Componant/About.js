import React, { useState } from 'react'

import '../componantStyle/about.css'

import logoCode from '../assets/logoCode.svg'
import arrowRight from '../assets/arrowRight.svg'
import arrowDown from '../assets/arrowDown.svg'


import SchrollDown from './SchrollDown'
import { useEffect } from 'react'



export default function About({skill,setSkill, scrollToSection, section}) {

  const [showDesign, setShowDesign] = useState(false);
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false);
  const [showSoftware, setShowSoftware] = useState(false);

  const toggleDesign = () => {
    setShowDesign(!showDesign);
  };

  const toggleFrontEnd = () => {
    setShowFrontEnd(!showFrontEnd);
  };

  const toggleBackEnd = () => {
    setShowBackEnd(!showBackEnd);
  };

  const toggleSoftware = () => {
    setShowSoftware(!showSoftware);
  };

  useEffect(()=>{
    setMeSkil(skill)
  },[skill])

  const [meSkill, setMeSkil] = useState(true)

  console.log(meSkill)

  const settrue = () =>{
    setMeSkil(true)
    setSkill(true)
  }

  const setFalse = () =>{
    setMeSkil(false)
    setSkill(false)
  }

  const meSkills = (meskill) =>{
    return meskill===true ? "active" : "noActive";
  }

  return (
    <div className='secondSection'>

      <div id='aboutSkills'>
        <div className={`AS ${meSkills(meSkill)}`} onClick={settrue}>
          <p>01</p>
          <p>ABOUT ME</p>
        </div>
        <div className={`AS ${meSkills(!meSkill)}`} onClick={setFalse}>
          <p>02</p>
          <p>SKILLS</p>
        </div>
      </div>
      <div className='secondSectionContainer'>
        <p id='meTitle'>Me, and my self</p>
        {meSkill ? <div className="textContainer" >
          <p>Hi there, my name is Hassane and I have a master's degree in
           Computer Science with a focus on software engineering and data processing.
           I am an experienced full-stack web and software developer with a passion for creating 
           efficient and user-friendly applications. I have worked on a variety of projects 
           throughout my career, from developing software solutions to building dynamic and 
           responsive websites. </p>
          <p>I am constantly seeking new challenges and opportunities to improve my skills 
          and knowledge in the field of technology. Let's work together to bring your ideas to 
          life.</p>
        </div>
          :
        <div className="skillsContainer">
            <div className='skills'>
                <div className='headerSkills'>
                  <div>
                    <img src={logoCode} alt=''/>
                    <p onClick={toggleDesign}>Design</p>
                  </div>
                  <img className='arrow' src={showDesign? arrowDown : arrowRight} alt='' onClick={toggleDesign}/>
                </div>
                {showDesign && <div className='skillElements'>
                    <div className='skillElement'>
                        <div>
                          <p>UI/UX DESIGN</p>
                          <p>45%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showDesign? '_40':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>3D DESIGN</p>
                          <p>50%</p>
                        </div>
                        <div className='border lastItem'>
                          <div className={`${showDesign? '_50':''} level`}></div>
                        </div>
                    </div>
                </div>}
              </div>


            <div className='skills'>
                <div className='headerSkills'>
                  <div>
                    <img src={logoCode} alt=''/>
                    <p onClick={toggleFrontEnd}>Front-end</p>
                  </div>
                  <img className='arrow' src={showFrontEnd? arrowDown : arrowRight} alt='' onClick={toggleFrontEnd}/>
                </div>
                {showFrontEnd && <div className='skillElements'>
                    <div className='skillElement'>
                        <div>
                          <p>HTML</p>
                          <p>90%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showFrontEnd? '_90':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>CSS</p>
                          <p>85%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showFrontEnd? '_85':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>JS</p>
                          <p>70%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showFrontEnd? '_70':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>REACT JS</p>
                          <p>70%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showFrontEnd? '_70':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>KOTLIN</p>
                          <p>40%</p>
                        </div>
                        <div className='border lastItem'>
                          <div className={`${showFrontEnd? '_40':''} level`}></div>
                        </div>
                    </div>
                </div>}
              </div>





              <div className='skills'>
                <div className='headerSkills'>
                  <div>
                    <img src={logoCode} alt=''/>
                    <p onClick={toggleBackEnd}>Back-end</p>
                  </div>
                  <img className='arrow' src={showBackEnd? arrowDown : arrowRight} alt='' onClick={toggleBackEnd}/>
                </div>
                { showBackEnd && <div className='skillElements'>
                    <div className='skillElement'>
                        <div>
                          <p>NODE JS</p>
                          <p>40%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showBackEnd? '_40':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>EXPRESS JS</p>
                          <p>40%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showBackEnd? '_40':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>SQL</p>
                          <p>90%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showBackEnd? '_90':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>SEQUALIZE</p>
                          <p>60%</p>
                        </div>
                        <div className='border lastItem'>
                          <div className={`${showBackEnd? '_60':''} level`}></div>
                        </div>
                    </div>
                </div>}
              </div>




              <div className='skills'>
                <div className='headerSkills'>
                  <div>
                    <img src={logoCode} alt=''/>
                    <p onClick={toggleSoftware}>Software developpement</p>
                  </div>
                  <img className='arrow' src={showSoftware? arrowDown : arrowRight} alt='' onClick={toggleSoftware}/>
                </div>
                {showSoftware && <div className='skillElements'>
                    <div className='skillElement'>
                        <div>
                          <p>WINFORM .NET</p>
                          <p>60%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showSoftware? '_60':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>ADO .NET</p>
                          <p>55%</p>
                        </div>
                        <div className='border'>
                          <div className={`${showSoftware? '_55':''} level`}></div>
                        </div>
                    </div>
                    <div className='skillElement'>
                        <div>
                          <p>SQL</p>
                          <p>90%</p>
                        </div>
                        <div className='border lastItem'>
                          <div className={`${showSoftware? '_90':''} level`}></div>
                        </div>
                    </div>
                </div>}
              </div>
        </div>
        }
      </div>

      <SchrollDown bottom='5vw' section ={section} scrollToSection={scrollToSection}/>
    </div>
  )
}
