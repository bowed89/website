import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>6+ In Bolivia</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Hi every one! My name is Jesus, I have a degree in system engineering of Universidad Católica Boliviana. 
            I've been working in different projects after finish my collegue studies. I started collaborating 
            on PHP managements projects, then I worked in e-commerce pages using Wordpress. After to get MEAN stack courses,
            I decided to focus in web developer area and starting to work with the stack learning. I developed an web apps 
            such as: E-commerce, sales and inventory, recruitment and enrollment. Actually, I'm learning and working 
            in personal projects using React.js framework. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About