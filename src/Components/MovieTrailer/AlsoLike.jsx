import React from 'react'
import MovieHeader from '../MoviesSetup/MovieHeader'
import MovieCards from '../MoviesSetup/MovieCards'
import { fetchSimilarMovies } from '../../media/mediaApi'
import { useParams } from 'react-router'
const AlsoLike = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = React.useState([])
  React.useEffect(() => {
    try {
      const getSimilarMovies = async () => {
        const res = await fetchSimilarMovies(movieId)
        setMovies(res)
      }
      getSimilarMovies()
    } catch (err) {
      return false
    }

  }, [movieId])
  console.log(movies);
  
  return (
    <div>
      <div>
        <MovieHeader header='More Like This' description='You May Also Like' />
        <div className='flex gap-2 mt-2 h-fit  overflow-x-auto px-2 scrollbar-none '>
          {
            movies.map((movie) =>
              <MovieCards title={movie.title} movieId={movie.id} year={movie.release_date} image_url={movie.poster_path} />
            )}
        </div>
      </div>
    </div>
  )
}

export default AlsoLike
