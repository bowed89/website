import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jesus Lopez</h1>
        <div className="text-light">FullStack Developer</div>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header