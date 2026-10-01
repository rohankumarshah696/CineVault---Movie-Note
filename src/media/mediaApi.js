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
  console.log("running");
  
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    {
      headers: {
        Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  console.log('ran');
  console.log(res.data.results);
  
   const trailer =res.data.results.find(res=>
    res.site === "YouTube" && res.type === "Trailer" && res.official === true 
   ) 
   return trailer.key;
}

export async function fetchMovieInformation(movieId){
   try {
    const res= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params:{
        api_key : MOVIE_API_KEY
      }
    }).then(res=>res.data)
    return res;
  } catch (error) {
    console.log(error.message)
  }
  return false
}

export async function fetchSimilarMovies(movieId) {
  try {
    return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`, {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
} 

export async function fetchMovieGenreIds(){
  try {
    return await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
}
export async function fetchTVGenreIds(){
  try {
    return await axios.get(`https://api.themoviedb.org/3/genre/tv/list`, {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` }
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
}
export async function DiscoverMovies(page){
  try {
    return await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` },
      params:{page : page}
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
}
export async function DiscoverTvShows(page){
  try {
    return await axios.get(`https://api.themoviedb.org/3/discover/tv`, {
      headers: { Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}` },
      params:{page : page}
    }).then(res => res.data.results);
  } catch (error) {
    console.log(error.message)
  }
  return false
}


