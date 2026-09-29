import React, { useState } from 'react'
import Select from './Select'
import DisMovieHeader from './DisMovieHeader'
const Section = () => {
  const [state, setState] = useState('Movies')
  const genres = [
    "All Genres",
    "Action",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Thriller"
  ]

  const years = [
    "All Years",
    2026,
    2025,
    2024
  ]

  const ratings = [
    "All Ratings",
    "9+",
    "8+",
    "7+"
  ]

  const popularity = [
    "Popularity",
    " Rating (High)",
    "Rating (Low)",
    "Newest",
    "Oldest"
  ]


  return (
    <>
    <div className='h-fit w-fit mx-5 my-4 bg-gray-600 p-4 rounded-xl flex flex-col items-start justify-center gap-6'>
      <div className='flex gap-0  '>
        <button className={`${state == 'Movies' ? 'bg-yellow-500' : ''}  px-2 py-1  border rounded-l-xl`} onClick={() => {
          setState('Movies')
        }}>Movies</button>
        <button className={`${state == 'TV Show' ? 'bg-yellow-500' : ''}  px-2 py-1  border rounded-r-xl`} onClick={() => {
          setState('TV Shows')
        }}>TV Show</button>
      </div>
      <div className='flex gap-3 flex-wrap'>
       <Select options={genres}/>
       <Select options={years}/>
       <Select options={ratings}/>
       <Select options={popularity}/>
      </div>
    </div>
    <DisMovieHeader header={state}/>
    </>
  )
}

export default Section
