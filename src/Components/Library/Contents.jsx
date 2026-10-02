import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCards from '../MoviesSetup/MovieCards'
const Contents = ({ state }) => {
    const items = useSelector(store => store.watchList.values)
    const movies = items.filter(movie => movie.release_date)
    const tvShows = items.filter(tvShows => tvShows.first_air_date)
    return (
        <div className='h-fit w-full flex gap-5 items-center justify-center flex-wrap px-8'>
            {
                state == "Movies" ?
                    movies.map((movie) =>
                        <MovieCards movie={movie} key={movie.id} movieId={movie.id} title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
                    ) : tvShows.map((movie) =>
                        <MovieCards movie={movie} key={movie.id} movieId={movie.id} title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
                    )
            }
        </div>
    )
}

export default Contents
