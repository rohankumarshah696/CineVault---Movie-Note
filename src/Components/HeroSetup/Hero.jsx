import React from 'react'
import Button from './Button'
import { fetchTrailer } from "../../media/mediaApi"
function Hero({
    title,
    release,
    rating,
    img,
    movieId
}) {

    const showTrailer = async () => {
  const trailer = await fetchTrailer(movieId);
  if (trailer) {
    window.open(
      `https://www.youtube.com/watch?v=${trailer.key}`,
      "_blank"
    );
  }
};

    const addToWatchlist = async ()=>{
      
    }


    return (
        <div
            className="h-90 md:h-150 max-w-full bg-contain bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${img})`
            }}
        >
            <div className='p-4 flex flex-col absolute bottom-0 gap-2'>
                <span className='text-xl text-yellow-500 uppercase'>—featured</span>
                <span className='text-2xl text-green-600 font-bold'>{title}</span>
                <span className=''>
                    Directed by: XXXXXXX
                </span>
                <ul className='flex gap-8 list-disc mx-4'>
                    <li><span>{rating}</span></li>
                    <li><span>{release}</span></li>
                    <li><span>dramatype</span></li>
                    <li><span>time</span></li>
                </ul>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button className='py-2 px-4 hover:-translate-y-0.5 duration-200 w-fit rounded-sm bg-yellow-500 text-black cursor-pointer' onClick={showTrailer}> ▶️ Watch Trailer</Button>
                    <Button className='rounded-sm hover:-translate-y-0.5 duration-200 py-2 px-4 w-fit border border-dashed cursor-pointer' onClick={addToWatchlist()}>+ Add to WatchList</Button>
                </div>
            </div>

        </div>
    )
}

export default Hero
