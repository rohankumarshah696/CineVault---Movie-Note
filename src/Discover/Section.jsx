import React, { useState } from 'react'

const Section = () => {
    const [state,setState]=useState('Movies')
  return (
    <div className='h-fit mx-5 my-4 bg-gray-600 p-4 rounded-xl flex items-center justify-center '>
        <div className='flex-1 gap-0  '>
      <button className={`${state=='Movies'? 'bg-yellow-500': ''} px-2 py-1 rounded-xl`} onClick={()=>{
        setState('Movies')
      }}>Movies</button>
      <button className={`${state=='TV Show'? 'bg-yellow-500': ''} px-2 py-1 rounded-xl`} onClick={()=>{
        setState('TV Show')
      }}>TV Show</button>
      </div>
    </div>
  )
}

export default Section
