import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import Hero from './Hero';


function HeroSection() {
    const arr=[1,2,3]
  return (
    <>
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={2000}
        autoplay={{
            delay:1000,
            disableOnInteraction:true,
            pauseOnMouseEnter:true,
            
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="h-90  md:h-150 max-w-full rounded-xl"
      >
        {  
        arr.map(()=> 
        (
        <SwiperSlide >
            <Hero />
        </SwiperSlide>
       )
    )
    }
      </Swiper>
        
    
    </>
  )
}

export default HeroSection
