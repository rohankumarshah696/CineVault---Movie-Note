import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchMovieInformation } from "../../media/mediaApi"
import { WatchListButton } from '../index'
import DescSkeleton from './DescSkeleton';
const Desc = () => {
    const [loading, setLoading] = useState(true)
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetchMovieInformation(movieId);
            setMovie(res)
            setLoading(false)
        }
        fetchMovie();
    }, [movieId])

    return (
        <>
            {
                loading ? <DescSkeleton />
             :
            <div className='h-fit w-full p-4 flex flex-col gap-2 text-white'>
                <h3 className='text-2xl md:text-5xl '>{movie.title}</h3>
                <span className='text-gray-600'>{movie.tagline}</span>
                <div className='flex gap-2 md:gap-4 md:text-xl md:flex-wrap text-red-600'>
                    <span>⭐{movie.vote_average}</span>
                    <span>{movie.release_date}</span>
                    <span>{Math.floor(movie.runtime / 60)}hr {movie.runtime % 60}min</span>
                </div>
                <div className='flex gap-2'>
                    {
                        movie.genres?.map(movie =>
                            <span key={movie.id} className='h-fit w-fit px-2 py-1 text-yellow-600 border-4 rounded-xl bg-yellow-950 font-bold border-yellow-700'>{movie.name}</span>
                        )
                    }
                </div>
                <p className='my-4'>
                    {movie.overview}
                </p>
                <div className='flex gap-4'>
                    <WatchListButton movie={movie} type="trailer" />
                </div>
            </div>
}
        </>
    )
}

export default Desc
