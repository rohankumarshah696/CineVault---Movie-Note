import React, { useEffect, useState } from 'react'
import MovieCards from '../Components/MoviesSetup/MovieCards.jsx'
import Button from './Button.jsx'
import { checkGenre, checkPopularity, checkRating, checkYear, getMoviesOrTvs } from './Checking.js'
let headerval = 'Movies'
const Movies = (
  {
    header,
    genre,
    year,
    rating,
    popularity
  }
) => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  function handleNext() {
    setPage(prev => prev + 1)
  }
  function handlePrev() {
    setPage(prev => prev - 1 == 0 ? 1 : prev - 1)
  }

  useEffect(() => {
    try {
      if (headerval != header) {
        setPage(1)
        headerval = header
      }
      const get = async () => {
        let res = await getMoviesOrTvs(header, page)
        res = checkYear(header, res, year);
        res = checkPopularity(header, res, popularity);
        res = checkRating(header, res, rating);
        res = await checkGenre(header, res, genre);
        setMovies(res)
      }
      get()
    } catch (err) {
      return false
    }
  }, [header,
    genre,
    year,
    rating,
    popularity,
    page])
  return (
    <div>
      <div className='flex flex-wrap gap-4 mt-2 h-fit items-center justify-center overflow-x-auto px-2 scrollbar-none'>
        {
          movies.map((movie) =>
            (<MovieCards key={movie.id} movieId={movie.id} title={movie.title ? movie.title : movie.name} year={movie.release_date ? movie.release_date : movie.first_air_date} image_url={movie.poster_path} />)
          )
        }
      </div>
      <div className='flex items-center justify-between w-full px-8 my-2'>
        <Button onClick={handlePrev}>Prev</Button>
        <button className='bg-gray-700 px-4 py-1 text-xl rounded-xl pointer-events-none'>{page}</button>
        <Button onClick={handleNext}> Next</Button>
      </div>
    </div>
  )
}

export default Movies
