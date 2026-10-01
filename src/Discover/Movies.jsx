import React, { useEffect, useState } from 'react'
import MovieCards from '../Components/MoviesSetup/MovieCards.jsx'
import Button from './Button.jsx'
import { fetchPopularMovies, DiscoverTvShows, DiscoverMovies, fetchMovieGenreIds, fetchTVGenreIds } from '../media/mediaApi.js'
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

  function checkPopularity(res) {
    if (popularity === "Popularity") res = res
    else if (popularity == "Rating (High)") res = res.sort((a, b) => b.vote_average - a.vote_average)
    else if (popularity == "Rating (Low)") res = res.sort((a, b) => a.vote_average - b.vote_average)
    res = popularity === "Newest"
      ? res.sort((a, b) =>
        new Date(b.release_date) - new Date(a.release_date)
      )
      : res;
    res = popularity === "Oldest"
      ? res.sort((a, b) =>
        new Date(a.release_date) - new Date(b.release_date)
      )
      : res;

    return res;
  }

  function checkYear(res) {
    res = year === "All Years" ? res : res.filter((movie) => Number(movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)) === Number(year));
    return res;
  }
  function checkRating(res) {
    res = rating === "All Ratings" ? res : res.filter(movie => Number(movie.vote_average) >= Number(rating[0]));
    return res;
  }

  async function checkGenre(res) {
    if (genre === "All Genres") return res;
    else if (genre === "Sci-Fi") genre = "Science Fiction"
    const genreIds = header == "Movies" ? await fetchMovieGenreIds() : await fetchTVGenreIds();
    const genreId = genreIds.filter(ids => ids.name === genre)[0].id;
    res = res.filter(movie => movie.genre_ids.includes(genreId))
    return res
  }


  useEffect(() => {
    try {
      const get = async () => {
        let res = header == "Movies" ? await DiscoverMovies(page) : await DiscoverTvShows(page)
        res = checkYear(res);
        res = checkPopularity(res);
        res = checkRating(res);
        res = await checkGenre(res);
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
    popularity, page])
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
        <Button className='bg-blue-700 px-4 py-1 rounded-xl' onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}> Next</Button>
      </div>
    </div>
  )
}

export default Movies
