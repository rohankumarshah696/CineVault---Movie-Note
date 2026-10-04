import React from 'react'

const button = ({onClick, children}) => {
  return (
    <button className='bg-blue-700 px-4 py-1 rounded-xl' onClick={onClick}>
      {children}
    </button>
  )
}

export default button
