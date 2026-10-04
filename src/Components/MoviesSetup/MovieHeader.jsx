import React from 'react'
function MovieHeader({
  header,
  description
}) {
  return (
    <div className='h-fit w-full flex justify-between px-4 mt-5'>
        <div className=' flex flex-col'>
      <span className='uppercase text-2xl'>{header}</span>
      <span className='text-gray-500'>{description}</span>
      </div>
    </div>
  )
}

export default MovieHeader
