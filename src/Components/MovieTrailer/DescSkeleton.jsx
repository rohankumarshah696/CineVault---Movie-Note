import React from 'react'
import { Skeleton } from '../ui/skeleton'
const DescSkeleton = () => {
    return (
        <div className='h-4/12 w-full p-4 flex flex-col gap-2 text-white'>
            <Skeleton className='h-12 md:h-18 w-30'/>
            <Skeleton className='h-6 w-50'/>
            <div className='flex gap-2 md:gap-4 md:flex-wrap '>
                <Skeleton className='h-10 w-16' />
                <Skeleton className='h-10 w-16' />
                <Skeleton className='h-10 w-16' />
            </div>
            <div className='flex gap-2'>
                <Skeleton className='h-12 w-20' />
                <Skeleton className='h-12 w-20' />
                <Skeleton className='h-12 w-20' />
            </div>
            <Skeleton className='h-20 w-8/12' />
            <div className='flex gap-4'>
                <Skeleton className=' rounded-sm h-14 w-40' />
            </div>
        </div>
    )
}

export default DescSkeleton
