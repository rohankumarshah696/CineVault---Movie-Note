import React from 'react'
import { useNavigate } from 'react-router'
import { fetchTrailer } from "../media/mediaApi"
import { WatchListButton } from '../Components'
function MovieSearch({
   movie,overView, image_URL, title ,year, movieId
}
) {
   
   const navigate=useNavigate()
    const showTrailer = async () => {
  const trailerKey = await fetchTrailer(movieId);
  if (trailerKey) {
     navigate(`/movie/${movieId}/${trailerKey}`)
  }
};

  return (
    <div className='flex gap-5 items-center hover:bg-gray-800 hover:z-10 transition-all duration-100 cursor-pointer border-b-2 px-5 py-2  w-full text-white' onClick={showTrailer}>
        <img src={`https://image.tmdb.org/t/p/w500/${image_URL}`} className='h-30 md:h-40 aspect-2/2 object-scale-down md:aspect-3/2 md:object-contain' alt="" />
        <div className=' left-3/4 flex flex-col'>
        <div className='flex gap-5'>
        <p className='text-xl font-bold text-red-600 block'>{title}
        </p>
      <WatchListButton className="" movie={movie} type="card"/>
      </div>
        <span className='hidden md:block mr-8'><p className='font-bold'>OverView:</p> {overView? overView : "N/A"}</span>
        <span><p className='font-bold'>Released Date:</p> {year? year : "N/A"}</span>
        </div>
    </div>
  )
}

export default MovieSearch
