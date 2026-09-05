import React from 'react'

function MovieSearch({
   overView, image_URL, title ,year
}
) {
  return (
    <div className='flex gap-5 items-center hover:bg-gray-800 hover:z-10 transition-all duration-100 cursor-pointer border-b-2 px-5 py-2  w-full text-white'>
        <img src={`https://image.tmdb.org/t/p/w500/${image_URL}`} className='h-30 md:h-40 aspect-2/2 object-scale-down md:aspect-3/2 md:object-contain' alt="" />
        <div className=' left-3/4 flex flex-col'>
        <span className='text-xl font-bold text-red-600'>{title}</span>
        <span className='hidden md:block'><p className='font-bold'>OverView:</p> {overView}</span>
        <span><p className='font-bold'>Released Date:</p> {year}</span>
        </div>
    </div>
  )
}

export default MovieSearch
