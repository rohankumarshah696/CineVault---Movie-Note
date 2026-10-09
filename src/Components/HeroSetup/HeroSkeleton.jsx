import React from 'react'
import { Skeleton } from '../ui/skeleton'
const HeroSkeleton = () => {
    return (
        <div
            className="h-90 md:h-150 w-full max-w-full border-2"
        >
            <Skeleton className='w-100 h-72'/>
            <div className='p-4 flex flex-col absolute bottom-0 gap-2'>

                <Skeleton className='h-12 w-35'/>
                <Skeleton className='h-12 w-50'/>
                <div className='flex gap-8 mx-4'>
                    <Skeleton className='h-6 w-20'/>
                    <Skeleton className='h-6 w-20'/>
                    {/* <li><span>{rating}</span></li>
                    <li><span>{release}</span></li> */}
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Skeleton className=' rounded-sm h-14 w-34'/>
                    <Skeleton className=' rounded-sm h-14 w-40'/>
                    {/* <Button className='py-2 px-4 hover:-translate-y-0.5 duration-200 w-fit rounded-sm font-bold bg-yellow-500 text-black cursor-pointer' onClick={showTrailer}> ▶️ Watch Trailer</Button>
                    <WatchListButton movie={movie} type="trailer" /> */}
                </div>
            </div>

        </div>
    )
}

export default HeroSkeleton
