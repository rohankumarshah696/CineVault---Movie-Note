import React from 'react'
import Button from '../HeroSetup/Button'
function MovieHeader({
  header,
  description
}) {
  return (
    <div className='h-fit w-full flex justify-between px-4 mt-2'>
        <div className=' flex flex-col'>
      <span className='uppercase text-2xl'>{header}</span>
      <span className='text-gray-500'>{description}</span>
      </div>
      <Button className='cursor-pointer text-yellow-500  right-4 hover:underline'>View All→</Button>
    </div>
  )
}

export default MovieHeader
