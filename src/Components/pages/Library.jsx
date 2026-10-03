import React from 'react'
import {LibHeader,TotalSelected,LibSection,Contents} from '../index'
const Library = () => {
  return (
    <>
    <div className='flex flex-wrap md:justify-between items-center px-5'>
      <LibHeader />
      <LibSection />
      <TotalSelected />
      </div>
      <Contents />
    </>
  )
}

export default Library
