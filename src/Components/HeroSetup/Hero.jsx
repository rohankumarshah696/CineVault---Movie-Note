import React from 'react'
import Button from './Button'

function Hero() {

    return (
        <div className='relative bg-[url("./DummyAssets/Hero.jpg")] h-90  md:h-150 w-full  bg-cover'>
            <div className='p-4 flex flex-col absolute bottom-0 gap-2'>
                <span className='text-xl text-yellow-500 uppercase'>—featured</span>
                <span className='text-2xl text-green-600 font-bold'>Avengers : Doomsday</span>
                <ul className='flex gap-8 list-disc mx-4'>
                    <li><span>rating</span></li>
                    <li><span>year</span></li>
                    <li><span>dramatype</span></li>
                    <li><span>time</span></li>
                </ul>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button className='py-2 px-4 hover:-translate-y-0.5 duration-200 w-fit rounded-sm bg-yellow-500 text-black cursor-pointer'> ▶️ Watch Trailer</Button>
                    <Button className='rounded-sm hover:-translate-y-0.5 duration-200 py-2 px-4 w-fit border border-dashed cursor-pointer'>+ Add to WatchList</Button>
                </div>
            </div>
            <p className='absolute bottom-4 mx-4 right-0'>
                Directed by: XXXXXXX
            </p>
        </div>
    )
}

export default Hero
