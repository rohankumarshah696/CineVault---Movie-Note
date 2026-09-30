import React, { useEffect, useState } from 'react'
import MovieCards from '../Components/MoviesSetup/MovieCards.jsx'
import {fetchPopularMovies,DiscoverTvShows,DiscoverMovies, fetchMovieGenreIds, fetchTVGenreIds} from '../media/mediaApi.js'
const Movies = (
    {
        header,
        genre,
        year,
        rating,
        popularity
    }
) => {
    const [movies,setMovies]=useState([])
    const [page,setPage] = useState(1)
    function handle(){
    setPage(prev=>prev+1)
    }
    function handlePrev(){
    setPage(prev=>prev-1)
    }
    useEffect(()=>{
        try{
       const get = async () => {
             let res =  header=="Movies"? await DiscoverMovies(page) : await DiscoverTvShows(page)
             res= year==="All Years"? res : res.filter((movie) => Number(movie.release_date? movie.release_date.slice(0,4) : movie.first_air_date.slice(0,4))===Number(year))
             console.log(res.map(movie => movie.release_date? movie.release_date : movie.first_air_date ));
             setMovies(res)  
             console.log(res)
           }
           get()
         } catch (err) {
           return false
         }
    },[header,
        genre,
        year,
        rating,
        popularity, page])
  return (
    <div>
       <div className='flex flex-wrap gap-4 mt-2 h-fit items-center justify-center overflow-x-auto px-2 scrollbar-none'>
       
         { movies.map((movie)=>
            (<MovieCards key={movie.id} movieId={movie.id} title={movie.title? movie.title : movie.name} year={movie.release_date? movie.release_date: movie.first_air_date} image_url={movie.poster_path} />)
          )
          }
      </div>
      <button onClick={handlePrev}>Prev</button><button onClick={handleNext}> next</button>
    </div>
  )
}

export default Movies
