import React, { useState, useEffect } from 'react'
import MovieHeader from './MoviesSetup/MovieHeader'
import MovieCards from './MoviesSetup/MovieCards'
import { fetchTrendingMovies } from '../media/mediaApi'
import MovieCardsSkeleton from './MoviesSetup/MovieCardsSkeleton'
function Trending() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const res = await fetchTrendingMovies()
        setMovies(res)
        setLoading(false)
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
          loading
            ? Array(10).fill(0).map((_, index) => (
              <MovieCardsSkeleton key={index} />
            ))
            : movies.map(movie => (
              <MovieCards
                movie={movie}
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                year={movie.release_date}
                image_url={movie.poster_path}
              />
            ))
        }
      </div>

    </>
  )
}

export default Trending
