import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Skeleton } from '../ui/skeleton'
const Trailer = () => {
  const [loading, setLoading] = useState(true)
  const { trailerKey } = useParams()

  return (
    <>
    {
      loading && (
      <div className='px-1 h-100 lg:h-150 md:h-120 max-w-full'>
        <Skeleton
          className='rounded-xl h-full w-full'
        />
      </div>
    )
    }

<div className='px-1 h-100 lg:h-150 md:h-120 max-w-full'>
  <iframe
    src={`https://www.youtube-nocookie.com/embed/${trailerKey}?si=lVNYlRY8l6lfotFl&rel=0`} allow="accelerometer; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share"
    className='rounded-xl h-full w-full'
    allowFullScreen
    onLoad={() => setLoading(false)}
  >
  </iframe>
</div>
</>
  )
}

export default Trailer

