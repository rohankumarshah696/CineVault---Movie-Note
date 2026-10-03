import React, { useEffect } from 'react'
import { useState } from 'react'
import Contents from './Contents'
import { setMovie_Tv } from '../../store/WatchListSlice'
import { useDispatch } from 'react-redux'
const LibSection = () => {
  const [state, setState] = useState('Movies')
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMovie_Tv(state))
  }, [state])
  return (
    <>
      <div className='h-fit w-fit my-4  p-4 rounded-xl flex flex-col  items-start justify-center gap-6'>
        <div className='flex gap-0  h-20 text-2xl'>
          <button className={`${state == 'Movies' ? 'bg-yellow-500' : ''}  px-2 py-1  border rounded-l-xl`} onClick={() => {
            setState('Movies')
          }}>Movies</button>
          <button className={`${state == 'TV Shows' ? 'bg-yellow-500' : ''}  px-2 py-1  border rounded-r-xl`} onClick={() => {
            setState('TV Shows')
          }}>TV Shows</button>
        </div>
      </div>

    </>
  )
}

export default LibSection
