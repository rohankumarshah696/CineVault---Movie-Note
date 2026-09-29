import React, { useState } from 'react'
import Select from './Select'
import DisMovieHeader from './DisMovieHeader'
const Section = () => {
  const [state, setState] = useState('Movies')
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Years");
  const [year, setYear] = useState("All Ratings");
  const [popularity, setPopularity] = useState();
  const selectOptions = [
    {
      name: "genre",
      values: [
        "All Genres",
        "Action",
        "Drama",
        "Horror",
        "Sci-Fi",
        "Thriller"
      ],
    },
    {
      name: "year",
      values: [
        "All Years",
        2026,
        2025,
        2024
      ],
    },
    {
      name: "rating",
      values: [
        "All Ratings",
        "9+",
        "8+",
        "7+"
      ],
    },

    {
      name: "popularity",
      values: [
        "Popularity",
        " Rating (High)",
        "Rating (Low)",
        "Newest",
        "Oldest"
      ]
    }
  ]

  const HandleClick = (name, val) => {
    if (name == "genre") setGenre(val)
    else if (name == "year") setYear(val)
    else if (name == "rating") setRating(val)
    else if (name == "popularity") setPopularity(val)
  console.log(name+':'+val)
  }

  return (
    <>
      <div className='h-fit w-fit mx-4 my-4 bg-gray-600 p-4 rounded-xl flex flex-col items-start justify-center gap-6'>
        <div className='flex gap-0  '>
          <button className={`${state == 'Movies' ? 'bg-yellow-500' : ''}  px-2 py-1  border rounded-l-xl`} onClick={() => {
            setState('Movies')
          }}>Movies</button>
          <button className={`${state == 'TV Shows' ? 'bg-yellow-500' : ''}  px-2 py-1  border rounded-r-xl`} onClick={() => {
            setState('TV Shows')
          }}>TV Shows</button>
        </div>
        <div className=' w-fit h-fit flex gap-3 flex-wrap'>
          {
            selectOptions.map((option) => (
              <Select options={option} onChange={(val)=>HandleClick(option.name, val)} />
            ))
          }
        </div>
      </div>
      <DisMovieHeader header={state} />
    </>
  )
}

export default Section
