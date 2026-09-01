import axios from "axios"

const MOVIE_API_KEY = import.meta.env.VITE_TMDB_MOVIE_API_KEY

export async function fetchMovies(){

     const res = await axios.get("https://api.themoviedb.org/3/movie/11", {
    header: { Authorization: `Bearer ${MOVIE_API_KEY}` },
  });
     
} 
