import React, { useState, useEffect } from 'react'
import { fetchFeaturedMovies } from '../../media/mediaApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Hero from './Hero';
import HeroSkeleton from './HeroSkeleton';

function HeroSection() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    try {
      const getFeaturedMovies = async () => {
        const res = await fetchFeaturedMovies();
        setMovies(res)
        setLoading(false)
      }
      getFeaturedMovies()
    } catch (err) {
      return false
    }
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        speed={2000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,

        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-90 w-full md:h-150 max-w-full rounded-xl"
      >
        {
          loading ?
            <HeroSkeleton />
            :
            movies.map((movie) =>
            (
              <SwiperSlide >
                <Hero movie={movie} movieId={movie.id} title={movie.title} release={movie.release_date} rating={movie.vote_average} img={movie.poster_path} />
              </SwiperSlide>
            )
            )
        }
      </Swiper>


    </>
  )
}

export default HeroSection
