import React from 'react'

const TotalSelected = () => {
  return (
    <div className='flex h-fit w-fit px-2 py-1 m-4 gap-3 items-center bg-gray-800 rounded-xl border-2 border-yellow-600'>
        <p className='text-yellow-500 font-bold text-xl'>13</p>
        <div className='flex flex-col text-gray-300 text-sm'>
       <p>saved</p>
       <p>items</p>
        </div>
    </div>
  )
}

export default TotalSelected
