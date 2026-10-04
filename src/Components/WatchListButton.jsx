import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { addToWatchList, removeWatchList } from '../store/WatchListSlice';
import { useDispatch, useSelector } from 'react-redux';
const WatchListButton = ({
    movie, type, className
}) => {
    const dispatch = useDispatch()
    const savedMovies = useSelector(store => store.watchList.values)
    const add = savedMovies.some(savedMovie => savedMovie.id === Number(movie.id));
    const handleWatchlist = () => {
        if (add) {
            dispatch(removeWatchList(movie))

        } else {
            dispatch(addToWatchList(movie))

        }
    }

    return (
        <button
            className={
                type === "trailer"
                    ? "transition-all md:px-5 px-2 py-3 duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] cursor-pointer bg-yellow-600 rounded-xl text-xl"
                     : ` ${className} rounded-xl bg-yellow-600 h-fit w-fit px-2 py-1 mt-2 text-xl`
            }
            onClick={(e) => {
                e.stopPropagation()
                handleWatchlist()
            }}
        >
            <span className="flex justify-center items-center gap-2 text-black font-bold">
                {add ? (
                    type == "trailer" ?
                        (<>
                            <FaCheckCircle />
                            Added to Watchlist
                        </>) : (
                            <FaCheckCircle />
                        )
                ) : (
                    type == "trailer" ?
                        (<>
                            <IoIosAddCircleOutline />
                            Add to Watchlist
                        </>) : (
                            <IoIosAddCircleOutline />
                        )
                )}
            </span>
        </button>
    )
}

export default WatchListButton
