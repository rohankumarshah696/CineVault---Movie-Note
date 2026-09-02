import axios from "axios"

const MOVIE_ACCESS_TOKEN = import.meta.env.VITE_TMDB_MOVIE_ACCESS_TOKEN

export async function fetchMovies(query ) {
  console.log(query)
  try {
    return await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        query: query,
      },
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data);
  } catch (error) {
    console.log(error.message)
  }
  return false
} 
