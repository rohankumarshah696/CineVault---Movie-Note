import React, { useEffect, useState } from 'react'
import AddButtons from './AddButtons'
import { useParams } from 'react-router'
import {fetchMovieInformation} from "../../media/mediaApi"
const Desc = () => {
    const { movieId } = useParams()
    const [movie,setMovie]=useState({})
    useEffect(()=>{
        try {
             const fetchMovie= async()=>{
                const res= await fetchMovieInformation(movieId)
                setMovie(res)
                console.log(movie);
                
             }
             fetchMovie()
            
             
        } catch (error) {
             console.log(error.message);
             
        }
    },[])
    return (
        <div className='h-fit w-full p-4'>
            <h3 className='text-5xl text-white'>The Midnight</h3>
            <span className='text-gray-600'>OKOKOKOKOKO</span>
            <div className='flex gap-4 text-xl flex-wrap'>
                <span>Rating</span>
                <span>year</span>
                <span>MovieTime</span>
                <span>Dir. XXXXX</span>
            </div>
            <div className='flex'>
                <span className='h-fit w-fit px-2 py-1 text-yellow-600 border-4 rounded-xl bg-yellow-950 font-bold border-yellow-700'>Cat</span>
            </div>
            <p className='my-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem debitis, atque dolore aut dolor repellat pariatur sapiente minima, corporis veniam ad vel adipisci aliquid hic, tempore officia voluptatibus nam voluptatum.
            </p>
            <button className='text-black px-5 py-3 mr-3 
       transition-all duration-300
  hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] cursor-pointer   bg-yellow-600 rounded-xl text-xl'> + Add to Library</button>
            <AddButtons >Watchlist</AddButtons>
        </div>
    )
}

export default Desc
