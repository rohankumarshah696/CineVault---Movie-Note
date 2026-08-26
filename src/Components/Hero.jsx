import React from 'react' 
function Hero() {
    return (
        <div className='relative bg-[url("./DummyAssets/Hero.jfif")] h-90 md:h-150 w-full  bg-cover'>
            <div className='p-4 flex flex-col absolute bottom-0 gap-4'>
       <span className=' mx-7 text-red-500 '>—FEATURED</span>
       <span className='text-2xl text-red-950 font-bold'>Spider-Man: No way Home</span>
       
       <div className='flex flex-col sm:flex-row gap-4'>
       <button className='mx-4 rounded-xl bg-yellow-500 px-4 cursor-pointer py-2 '> ▶️ Watch Trailer</button>
       <button className='rounded-xl border border-dashed cursor-pointer text-black px-4 py-2 '>+ Add to WatchList</button>
</div>
            </div>
         
        </div>
    )
}

export default Hero
