import React from 'react'
import MovieHeader from './MoviesSetup/MovieHeader'
import MovieCards from './MoviesSetup/MovieCards'
function Trending() {
  return (
    <>
    <MovieHeader header='trending now' description='What everyone is watching.'/>
    <MovieCards />
    </>
  )
}

export default Trending
