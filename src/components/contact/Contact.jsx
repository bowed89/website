import React, { useRef } from 'react';

import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zxokjm2', 'template_nkt9rzj', form.current, 'mOSwZvNY4TaFg6AX8')
    e.target.reset();
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href="mailto:jesus.lopez.averanga@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jesus Lopez Averanga</h5>
            <a href="https://m.me/yisuslopezaveranga" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+59172016924</h5>
            <a href="https://api.whatsapp.com/send?phone=59172016924" target='_blank'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

      </div>



    </section>
  )
}

export default Contact