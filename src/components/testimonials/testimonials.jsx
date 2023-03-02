import React from 'react'
import '../styles/testimonials.css'
import AVTR1 from '../styles/assets/avatar1.jpg'
import AVTR2 from '../styles/assets/avatar2.jpg'
import AVTR3 from '../styles/assets/avatar3.jpg'
import AVTR4 from '../styles/assets/avatar4.jpg'
// Import Swiper React components
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




const Testimonials = () => {

  const data = [
    {
      avatar: AVTR1,
      name: 'Alejandro Garcia',
      review: "Software Developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque molestiae inventore maxime ab dolorem."
    },
    {
      avatar: AVTR2,
      name: 'Juan David Otalora',
      review: "Software Developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque molestiae inventore maxime ab dolorem."
    },
    {
      avatar: AVTR3,
      name: 'Miguel Torres',
      review: "Software Developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque molestiae inventore maxime ab dolorem."
    },
    {
      avatar: AVTR4,
      name: 'Abigail Montes',
      review: "Software Developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque molestiae inventore maxime ab dolorem."
    }
  ]

  return (
    <section id="testimonials">
      <h5>Review from coworkers</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
       pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )})}
      </Swiper>
    </section>
  )
}

export default Testimonials