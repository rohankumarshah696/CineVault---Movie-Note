import React from 'react'
import MovieHeader from '../MoviesSetup/MovieHeader'
import MovieCards from '../MoviesSetup/MovieCards'
import { fetchPopularMovies } from '../../media/mediaApi'
const AlsoLike = () => {
    const [movies, setMovies] = React.useState([])
      React.useEffect(() => {
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
      <div>
      <MovieHeader header='More Like This' description='You May Also Like' />
       <div className='flex gap-2 mt-2 h-fit  overflow-x-auto px-2 scrollbar-none '>
        {
          movies.map((movie) =>
            <MovieCards title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
          )}
      </div>
    </div>
    </div>
  )
}

export default AlsoLike
