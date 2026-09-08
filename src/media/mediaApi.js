import axios from "axios"

const MOVIE_ACCESS_TOKEN = import.meta.env.VITE_TMDB_MOVIE_ACCESS_TOKEN
const MOVIE_API_KEY = import.meta.env.VITE_TMDB_MOVIE_API_KEY

export async function fetchMovies(query ) {
try {
    return await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        query: query,
      },
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
} 

export async function fetchPopularMovies() {
  try {
    return await axios.get("https://api.themoviedb.org/3/movie/popular", {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
} 

export async function fetchFeaturedMovies() {
  try {
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming", {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
    console.log(res);
    return res    
  } catch (error) {
    console.log(error.message)
  }
  return false
} 

export async function fetchTrendingMovies() {
  try {
    return await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
     headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
} 

export async function fetchTrailer(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    {
      headers: {
        Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );
   const trailer =res.data.results.find(res=>
    res.site === "YouTube" && res.type === "Trailer" && res.official === true 
   ) 
   return trailer;
}