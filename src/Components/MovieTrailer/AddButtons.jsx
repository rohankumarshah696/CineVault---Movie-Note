import React from 'react'

const AddButtons = ({children}) => {
    return (
      <button className='bg-gray-800 text-white px-5 py-3 rounded-xl cursor-pointer border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400'>
      {children}
      </button>
    )
}

export default AddButtons
