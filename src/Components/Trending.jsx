import React, { useState, useEffect } from 'react'
import MovieHeader from './MoviesSetup/MovieHeader'
import MovieCards from './MoviesSetup/MovieCards'
import { fetchTrendingMovies } from '../media/mediaApi'
function Trending() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const res = await fetchTrendingMovies()
        setMovies(res)
      }
      getTrendingMovies()
    } catch (err) {
      return false
    }
  }, [])

  return (
    <>
      <MovieHeader header='trending now' description='What everyone is watching.' />
      <div className='flex gap-2 mt-2 h-fit overflow-x-auto px-2 scrollbar-none '>
        {
          movies.map((movie) =>
            <MovieCards key={movie.id} title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
          )}
      </div>

    </>
  )
}

export default Trending
