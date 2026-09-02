import React from 'react'

function MovieSearch({
   overView, image_URL, title ,year=2023
}
) {
  return (
    <div className='flex gap-5 items-center hover:bg-gray-800 hover:z-10 transition-all duration-100 cursor-pointer border-b-2 px-2 py-2 w-full text-white'>
        <img src={`https://image.tmdb.org/t/p/original/${image_URL}`} className='  h-40 object-cover' alt="" />
        <div className=' left-3/4 flex flex-col'>
        <span className='text-xl font-bold'>{title}</span>
        <span >OverView: {overView}</span>
        <span >Released Date: {year}</span>
        </div>
    </div>
  )
}

export default MovieSearch
