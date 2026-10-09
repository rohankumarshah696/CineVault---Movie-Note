import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { fetchTrailer } from '../../media/mediaApi';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { addToWatchList, removeWatchList } from '../../store/WatchListSlice';
import { useDispatch, useSelector } from 'react-redux';
import WatchListButton from '../WatchListButton'
function MovieCards({
  movie,
  title,
  year,
  image_url,
  movieId,
}) {
  const savedMovies = useSelector(store => store.watchList.values)
  const [add, setAdd] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    savedMovies.map(movie => {
      if (movie.id == movieId) setAdd(true);
    })
  }, [])

  const navigate = useNavigate()
  const handleClick = async () => {
    console.log('run');
    console.log(movieId);
    const trailerKey = await fetchTrailer(movieId);
    if (trailerKey) {
      console.log(trailerKey);
      navigate(`/movie/${movieId}/${trailerKey}`)
    }
  };


  return (
    <div className='relative cursor-pointer hover:-translate-y-2 hover:z-10 duration-200 flex flex-col min-h-70 max-h-fit  md:min-h-90  w-40 md:w-50  rounded-sm shrink-0 my-4 bg-gray-600' onClick={() => handleClick()}>
      <WatchListButton className="absolute right-0" movie={movie} type="card"/>
      {/* <button className='absolute right-0 mr-2 rounded-xl bg-yellow-600 h-fit w-fit px-2 py-1 mt-2 text-xl' onClick={(e) => {
        e.stopPropagation()
        handleWatchlist()
      }}>{
          add ? <FaCheckCircle /> : <IoIosAddCircleOutline />
        }</button> */}
      <img src={`https://image.tmdb.org/t/p/w500/${image_url}`} className='h-40 md:h-60 w-full  rounded-sm object-cover' alt="img" />
      <div className='flex flex-col gap-2 py-3 px-2 '>
        <span className='md:text-xl text-red-500 md:font-bold'>{title}</span>
        <span className='text-sm'>Release Date: {year}</span>
      </div>
    </div>
  )
}

export default MovieCards
