import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* FRONTEND EXPERIENCE */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Html</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Css</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PrimeNG</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND EXPERIENCE */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Oracle</h4>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience