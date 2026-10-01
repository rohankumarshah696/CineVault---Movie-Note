import React from 'react'
import { useEffect, useState } from 'react'
import { fetchPopularMovies } from '../../media/mediaApi'
import MovieCards from '../MoviesSetup/MovieCards'
const Contents = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        try {
            const getPopularMovies = async () => {
                const res = await fetchPopularMovies()
                console.log('ok');
                setMovies(res)
            }
            getPopularMovies()
        } catch (err) {
            return false
        }

    }, [])
    return (
        <div className='h-fit w-full flex gap-5 items-center justify-center flex-wrap px-8'>
            {
                    movies.map((movie) =>
            <MovieCards key={movie.id} movieId={movie.id} title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
                )}
        </div>
    )
}

export default Contents
