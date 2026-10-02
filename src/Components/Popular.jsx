import React, { useEffect, useState } from 'react'
import MovieHeader from './MoviesSetup/MovieHeader'
import MovieCards from './MoviesSetup/MovieCards'
import { fetchPopularMovies } from '../media/mediaApi'
function Popular() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    try {
      const getPopularMovies = async () => {
        const res = await fetchPopularMovies()
        setMovies(res)
      }
      getPopularMovies()
    } catch (err) {
      return false
    }
  }, [])

  return (
    <div>
      <MovieHeader header='popular this week' description='Created picks from our editors.' />
      <div className='flex gap-2 mt-2 h-fit  overflow-x-auto px-2 scrollbar-none '>
        {
          movies.map((movie) => 
            <MovieCards movie={movie} key={movie.id} movieId={movie.id} title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
          )
        }
      </div>
    </div>
  )
}

export default Popular
