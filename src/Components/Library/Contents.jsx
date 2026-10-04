import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCards from '../MoviesSetup/MovieCards'
const Contents = ({  }) => {
    const state = useSelector(store => store.watchList.stateVal)
    const items = useSelector(store => store.watchList.values)
    const movies = items.filter(movie => movie.release_date)
    const tvShows = items.filter(tvShows => tvShows.first_air_date)
    return (
        <div className='h-full w-full flex  flex-wrap px-2 gap-4'>
            {
                state == "Movies" ?
                    movies.map((movie) =>
                        <MovieCards movie={movie} key={movie.id} movieId={movie.id} title={movie.title} year={movie.release_date} image_url={movie.poster_path} />
                    ) : tvShows.map((tv) =>
                        <MovieCards movie={tv} key={tv.id} movieId={tv.id} title={tv.title} year={tv.first_air_date} image_url={tv.poster_path} />
                    )
            }
        </div>
    )
}

export default Contents
