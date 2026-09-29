import React from 'react'


function DisMovieHeader({
  header,

}) {
  return (
  
        <div className='p-4 h-full w-full flex  items-center justify-between'>
      <span className='uppercase text-2xl'> Explore {header}</span>
      <span className='text-gray-500'>12 titles</span>
      </div>
      
    
  )
}
export default DisMovieHeader



