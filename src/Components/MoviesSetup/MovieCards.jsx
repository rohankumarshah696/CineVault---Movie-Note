import React from 'react'
import Thumbnail from '../../DummyAssets/Thumbnail.jfif'
function MovieCards() {
  const obj=[{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
   {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
{
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
  {
    'rating':3,
    'year':2026,
    "genre":"Sci-Fi"
  },
]


  return (
    <div className='flex gap-2 mt-2 overflow-x-auto px-2 scrollbar-none '>
      {
        obj.map(e=>(
          <div className='cursor-pointer hover:-translate-y-2 hover:z-10 duration-200 flex flex-col h-80 w-50 rounded-sm shrink-0'>
            <img src={Thumbnail} className='h-60 w-full rounded-sm object-cover' alt="img"/>
            <div className='flex gap-2 mt-3'>
            <span>{e.rating}</span>
            <span>{e.year}</span>
            <span>{e.genre}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MovieCards
