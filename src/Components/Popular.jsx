import React from 'react'
import MovieHeader from './MoviesSetup/MovieHeader'
import MovieCards from './MoviesSetup/MovieCards'
function Popular() {
  return (
    <div>
      <MovieHeader header='popular this week' description='Created picks from our editors.'/>
    <MovieCards />
    </div>
  )
}

export default Popular
