import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Rapid Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Digital Experience Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ecommerce Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Infrastructure and Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Management Systems</p>
            </li>
           
          </ul>
        </article>

      </div>


    </section>
  )
}

export default Services