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
          <div className='cursor-pointer hover:-translate-y-2 hover:z-10 duration-200 flex flex-col min-h-70 max-h-fit  md:min-h-90  w-40 md:w-50  rounded-sm shrink-0 my-4 bg-gray-600' onClick={()=>handleClick()}>
            <img src={`https://image.tmdb.org/t/p/w500/${image_url}`} className='h-40 md:h-60 w-full  rounded-sm object-cover' alt="img"/>
            <div className='flex flex-col gap-2 py-3 px-2 '>
            <span className='md:text-xl text-red-500 md:font-bold'>{title}</span>
            <span className='text-sm'>Release Date: {year}</span>
            </div>
          </div>
  )
}

export default MovieCards
