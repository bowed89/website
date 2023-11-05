import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
//Logos
import angular from '../../assets/logos/angular.png'
import react from '../../assets/logos/react.png'
import node from '../../assets/logos/nodejs.png'
import spring from '../../assets/logos/spring.png'

const data = [
  {
    id: 1,
    image: IMG1,
    logo: react,
    logo2: '',
    title: 'Fit Club Gym Pro',
    github: 'https://github.com/bowed89/fitclubpro-reactjs',
    githuback: '',
    demo: 'https://fitclubgympro.pages.dev/',
    tools: 'React',
    tip: ''
  },
  {
    id: 2,
    image: IMG2,
    logo: react,
    logo2: '',
    title: 'Real State, sales & buy homes',
    github: 'https://github.com/bowed89/realstate_nextjs',
    githuback: '',
    demo: 'https://realstate-nextjs-umber.vercel.app/',
    tools: 'Nextjs, Chakra ui',
    tip: ''
  },
  {
    id: 3,
    image: IMG3,
    logo: angular,
    logo2: node,
    title: 'Order App',
    github: '',
    githuback: 'https://github.com/bowed89/order-app-backend',
    demo: 'https://orderapp-41b46.web.app/',
    tools: 'Angular, PrimeNG, NodeJS, Postgres',
    tip: 'username: admin | password: admin'
  },
  {
    id: 4,
    image: IMG5,
    logo: angular,
    logo2: spring,
    title: 'Inventory App',
    github: 'https://github.com/bowed89/inventory-frontend-railway',
    githuback: 'https://github.com/bowed89/inventory-backend-springboot',
    demo: 'https://inventoryapp-a82c3.web.app/',
    tools: 'Angular, Angular Material, Spring Boot, MySql',
    tip: 'email: admin@admin.com | password: admin'
  },
  {
    id: 5,
    image: IMG4,
    logo: react,
    logo2: '',
    title: 'Restaurant Delivery',
    github: 'https://github.com/bowed89/restaurant_delivery',
    githuback: '',
    demo: 'https://restaurantapp-bfad7.web.app',
    tools: 'React, Tailwindcss',
    tip: ''
  },
  {
    id: 6,
    image: IMG6,
    logo: react,
    logo2: '',
    title: 'Budget Control',
    github: 'https://github.com/bowed89/control-gastos-react',
    githuback: '',
    demo: 'https://control-gastos.pages.dev',
    tools: 'React',
    tip: ''
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recen Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo, tools, tip, githuback, logo, logo2 }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className='img_portfolio' src={image} alt={title} />
              </div>
              
              <h3 className='title'>{title}</h3>
              <div className='img_logo'>
                <img src={logo} />
                <img  src={logo2} />
              </div>

              <div className='tips'>
              <p style={{ 'marginBottom': '20px', 'color': '#ccc' }}>{tools}</p>
              
              {tip.length > 0 && <p style={{ 'marginBottom': '20px', 'color': '#ccc' }}><a style={{fontWeight: "bold"}}>LOGIN:</a> {tip}</p>}
              </div>

              <div className="portfolio__item-cta">
                {github.length > 0 && <a href={github} className='btn' target='_blank'>Github Frontend</a>}
                {githuback.length > 0 && <a href={githuback} className='btn' target='_blank'>Github Backend</a>}
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          ))
        }



      </div>
    </section>
  )
}

export default Portfolio