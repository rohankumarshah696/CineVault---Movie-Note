import React, { useEffect, useState } from 'react'
import AddButtons from './AddButtons'
import { useParams } from 'react-router'
import { fetchMovieInformation } from "../../media/mediaApi"
const Desc = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetchMovieInformation(movieId);
            setMovie(res);
        }
        fetchMovie()
    }, [movieId])
    return (
        <div className='h-fit w-full p-4 flex flex-col gap-2 '>
            <h3 className='text-2xl md:text-5xl text-white'>{movie.title}</h3>
            <span className='text-gray-600'>{movie.tagline}</span>
            <div className='flex gap-2 md:gap-4 md:text-xl md:flex-wrap text-red-600'>
                <span>{movie.vote_average}</span>
                <span>{movie.release_date}</span>
                <span>{Math.floor(movie.runtime / 60)}hr {movie.runtime % 60}min</span>
                <span>Dir. XXXXX</span>
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
                <button className='text-black md:px-5 md:py-3 px-2 
       transition-all duration-300
  hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] cursor-pointer   bg-yellow-600 rounded-xl text-xl'> + Add to Library</button>
                <AddButtons >Watchlist</AddButtons>
            </div>
        </div>
    )
}

export default Desc
