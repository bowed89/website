import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Avatar 1',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptas pariatur ipsa consequuntur dolor laudantium.'
  },
  {
    avatar: AVTR2,
    name: 'Avatar 2',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptas pariatur ipsa consequuntur dolor laudantium.'
  },
  {
    avatar: AVTR3,
    name: 'Avatar 3',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptas pariatur ipsa consequuntur dolor laudantium.'
  },
  {
    avatar: AVTR4,
    name: 'Avatar 4',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptas pariatur ipsa consequuntur dolor laudantium.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials