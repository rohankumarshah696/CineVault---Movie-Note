import React from 'react'

const DisHero = (
  {
    yellow_title,
    name,
    slogan
  }
) => {
  return (
    
    <div className='m-4 flex flex-col'>
       <span className= ' text-yellow-600 uppercase'>{yellow_title}</span>
       <span className='font-bold text-white text-2xl uppercase'>{name}</span>
       <p className='text-gray-300'>{slogan}</p>
    </div>
    
  )
}

export default DisHero
