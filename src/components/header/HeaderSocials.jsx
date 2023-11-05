import React from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/jesus-lop-averanga" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/bowed89" target="_blank">
                <FaGithub />
            </a>
            <a href="https://www.facebook.com/bowed89" target="_blank">
                <BsFacebook />
            </a>

        </div>
    )
}

export default HeaderSocials