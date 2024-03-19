import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css'
const About = ({setPlayState}) => {
  return (
      <div className='about'>
          <div className="about-left">
              <img src={about_img} className="about-img" />
        <img src={play_icon} className="play-icon" onClick={() => {
                setPlayState(true);
              }}/>
          </div>
          <div className="about-right">
              <h3>ABOUT UNIVERSITY</h3>
              <h2>Nurturing Tomorrow's Leader Today</h2>
              <p>A college typically refers to an institution of higher education where students pursue undergraduate and sometimes graduate degrees in various fields of study. Colleges can vary widely in size, focus, and offerings, but they generally provide a structured environment for academic learning, research, and personal development.</p>
          </div>
      
    </div>
  )
}

export default About
