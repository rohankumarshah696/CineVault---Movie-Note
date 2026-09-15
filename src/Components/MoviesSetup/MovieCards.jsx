import React from 'react'
import { useNavigate } from 'react-router';
import { fetchTrailer } from '../../media/mediaApi';
function MovieCards({
  title,
  year,
  image_url,
  movieId
}) {
      const navigate=useNavigate()
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
          <div className='cursor-pointer hover:-translate-y-2 hover:z-10 duration-200 flex flex-col h-80 w-50 rounded-sm shrink-0' onClick={()=>handleClick()}>
            <img src={`https://image.tmdb.org/t/p/w500/${image_url}`} className='h-60 w-full rounded-sm object-cover' alt="img"/>
            <div className='flex flex-col gap-2 mt-3'>
            <span className='text-xl text-red-500 font-bold'>{title}</span>
            <span className='text-sm'>Release Date: {year}</span>
            </div>
          </div>
  )
}

export default MovieCards
