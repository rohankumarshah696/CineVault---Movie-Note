import React from 'react'
import { Skeleton } from '../ui/skeleton'
function MovieCardsSkeleton() {
  return (

    <div className='relative flex flex-col min-h-70 max-h-fit  md:min-h-90  w-40 md:w-50  rounded-sm shrink-0 my-4 bg-gray-600'>
      <Skeleton className='absolute right-0 mr-2 rounded-xl h-6 w-5 mt-2'/>
      {/* <button className='absolute right-0 mr-2 rounded-xl bg-yellow-600 h-fit w-fit px-2 py-1 mt-2 text-xl'>{
        }</button> */}
        <Skeleton className='h-40 z-10 md:h-60 w-full  rounded-sm'/>
      {/* <img src={`https://image.tmdb.org/t/p/w500/${image_url}`} className='h-40 md:h-60 w-full  rounded-sm object-cover' alt="img" /> */}
      <div className='flex flex-col gap-2 py-3 px-2 '>
        <Skeleton className='h-8 w-24'/>
        <Skeleton className='h-4 w-30'/>
        {/* <span className='md:text-xl text-red-500 md:font-bold'>{title}</span>
        <span className='text-sm'>Release Date: {year}</span> */}
      </div>
    </div>
  )
}

export default MovieCardsSkeleton
