import React from 'react'
import './about.css'
import ME from '../../assets/headshot3.jpg'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default About

