import React, { useRef } from 'react';

// import CSS
import "../componantStyle/accueil.css"
import "../componantStyle/header.css"
import "../componantStyle/footer.css"


// import componant
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

//import images
import Facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import linkedin from '../assets/LinkedIn.svg'
import git from '../assets/git.svg'
import arrowMail from '../assets/arrowEmail.svg'

import ZB from './ZB'
import { useState } from 'react';



const Accueil = () => {
    const sectionRefs = {
        header: useRef(null),
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null),
    };

    const [skill, setSkill] = useState(true)

    const scrollToSection = (section) => {
        sectionRefs[section].current.scrollIntoView({
            behavior: 'smooth',
        });
    };

       
    return (
    <div className='Container' ref={sectionRefs.header}>
        <div className='headerContainer'>
            <div className='insideHeaderContainer'>
                <div id='logoContainer'>
                    <p className='logo'>A.H</p>
                </div>
                <ul className='headerList'>
                    <li className='listHeaderElement' onClick={() => scrollToSection('section1')}>
                        <p>Home</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => {scrollToSection('section2'); setSkill(true)}}>
                        <p>About</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => {scrollToSection('section2'); setSkill(false)}}>
                        <p>Skills</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => scrollToSection('section3')}>
                        <p>Portfolio</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => scrollToSection('section4')}>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
        </div>
        
            <div className='home' ref={sectionRefs.section1}>
                 <Home scrollToSection={scrollToSection} section="section2"/> 
            </div>
            <div className='about' ref={sectionRefs.section2}>
                 <About skill={skill} setSkill={setSkill} scrollToSection={scrollToSection} section="section3"/>
                 <ZB  top="35.5vw" right="60vw"/>
            </div>
            <div className='work' ref={sectionRefs.section3}>
                <Work scrollToSection={scrollToSection} section="section4"/>
            </div>
            <div ref={sectionRefs.section4}>
                 <Contact/>
            </div>
            <div ref={sectionRefs.section5}>
                
            </div>

            <div className='footerContainer'>
        <div className='footer'>
            <div className='footerSection s1'>
            
            <div className='s1Up'>
                <p className='logo' onClick={() => scrollToSection('header')}>A.H</p>
                

                <div className='s1Down'>
                    <div className='socialMedia'>
                        <a href='https://www.linkedin.com/in/hassane-ali-ziane-9279b0225/' target='_blank'  rel="noopener noreferrer"><img src={linkedin} alt=''/></a>
                        <a href='https://www.instagram.com/alizhassane/' target='_blank'  rel="noopener noreferrer"><img src={instagram} alt=''/></a>
                        <a href='https://web.facebook.com/hassane.aliz' target='_blank'  rel="noopener noreferrer"><img src={Facebook} alt=''/></a>
                    </div>

                    <div className='Txt'>
                    <p>© 2023 . All rights reserved.</p>
                    </div>
                </div>

            </div>

            </div>

           

         

        </div>
</div>
    </div>

    
    );
};

export default Accueil;
