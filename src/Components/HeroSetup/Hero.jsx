import React from 'react'
import Button from './Button'
import { fetchTrailer } from "../../media/mediaApi"
import { useNavigate } from 'react-router';
import { WatchListButton } from '../index'
function Hero({
    movie,
    title,
    release,
    rating,
    img,
    movieId
}) {
    const navigate = useNavigate()
    const showTrailer = async () => {
        const trailerKey = await fetchTrailer(movieId);
        if (trailerKey) {
            navigate(`movie/${movieId}/${trailerKey}`)
        }
    };

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
                <ul className='flex gap-8 list-disc mx-4'>
                    <li><span>{rating}</span></li>
                    <li><span>{release}</span></li>
                </ul>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button className='py-2 px-4 hover:-translate-y-0.5 duration-200 w-fit rounded-sm bg-yellow-500 text-black cursor-pointer' onClick={showTrailer}> ▶️ Watch Trailer</Button>
                    <WatchListButton movie={movie} type="trailer"/>
                </div>
            </div>

        </div>
    )
}

export default Hero
