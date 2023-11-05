import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { AiTwotoneContainer, AiTwotoneBank, AiOutlineUnlock } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#privacy-policy" onClick={() => setActiveNav('#privacy-policy')} className={activeNav === '#privacy-policy' ? 'active' : ''}><AiTwotoneBank /></a>
      <a href="#terms" onClick={() => setActiveNav('#terms')} className={activeNav === '#terms' ? 'active' : ''}><AiOutlineUnlock /></a>
      <a href="#facebook-verificacion" onClick={() => setActiveNav('#facebook-verificacion')} className={activeNav === '#facebook-verificacion' ? 'active' : ''}><FaFacebook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav