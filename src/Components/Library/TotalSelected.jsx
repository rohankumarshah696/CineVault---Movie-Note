import React from 'react'
import { useSelector } from 'react-redux'
const TotalSelected = () => {
  const state = useSelector(store => store.watchList.stateVal)
    const items = useSelector(store => store.watchList.values)
    const movies = items.filter(movie => movie.release_date)
    const tvShows = items.filter(tvShows => tvShows.first_air_date)
  return (
    <div className='flex h-fit w-fit px-2 py-1 m-4 gap-3 items-center bg-gray-800 rounded-xl border-2 border-yellow-600'>
        <p className='text-yellow-500 font-bold text-xl'>
          {
            state=="Movies" ?
            movies.length : tvShows.length
          }
        </p>
        <div className='flex flex-col text-gray-300 text-sm'>
       <p>saved</p>
       <p>items</p>
        </div>
    </div>
  )
}

export default TotalSelected
