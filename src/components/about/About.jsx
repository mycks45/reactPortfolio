import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>  
              <h5>Experience</h5>
              <small>1 year Working</small>
            </article>  
            <article className="about__card">
              <FiUsers className='about__icon'/>  
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>  
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>  
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>  
          </div>

          <p>Hi, my name is Harshad. I am a web developer based in India. I love playing guitar and creating something that makes people smile. Powered by VS Code and coffee, I turn your requirements into CMS-ified and e-commerce-ified websites - on time and on budget.I help designers, small agencies and businesses bring their ideas to life. Powered by VS Code and coffee, I turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.</p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>
      </div>  
    </section>
  )
}

export default About