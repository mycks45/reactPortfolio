import React from 'react'
import './testimonials.css'
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'

import { Pagination } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar:AVA1,
    name:'Monica Geller',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid voluptas quod rem enim consectetur quos suscipit, officia laudantium voluptatum aliquam accusantium vero dignissimos nulla nobis! Mollitia quo veritatis dolorum!'
  },
  {
    avatar:AVA2,
    name:'Chandler Bing',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid voluptas quod rem enim consectetur quos suscipit, officia laudantium voluptatum aliquam accusantium vero dignissimos nulla nobis! Mollitia quo veritatis dolorum!'
  },
  {
    avatar:AVA3,
    name:'Ross Geller',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid voluptas quod rem enim consectetur quos suscipit, officia laudantium voluptatum aliquam accusantium vero dignissimos nulla nobis! Mollitia quo veritatis dolorum!'
  },
  {
    avatar:AVA4,
    name:'Joey',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid voluptas quod rem enim consectetur quos suscipit, officia laudantium voluptatum aliquam accusantium vero dignissimos nulla nobis! Mollitia quo veritatis dolorum!'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        pagination={{clickable:true}} 
        modules={[Pagination]} 
        spaceBetween={40}
        slidesPerView={1}

      >
        
        {
         data.map(({avatar,name,review}, index)=>{
           return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatarOne" /> 
                </div>
                <h5 className='clients__name'>{name}</h5>
                <small className='clients__review'>{review}</small> 
              </SwiperSlide>  
           )
         })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials