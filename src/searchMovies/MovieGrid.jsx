import React,{useState,useEffect} from 'react';
import { fetchMovies } from '../media/mediaApi';
import MovieSearch from './MovieSearch';
import { useSelector } from 'react-redux';
import Loading from './Loading';
function MovieGrid() {

   const searchContent = useSelector(store => store.search.value);
  const searchVal = useSelector(store => store.search.searchState)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchContent || !searchVal) return;

    async function getMovies() {
      const res = await fetchMovies(searchContent);  
      setMovies(res);
    }

    getMovies();
  }, [searchContent, searchVal]);

  return (
    <div className="flex h-full w-full justify-center items-center  flex-col gap-2" >
      {
      movies.length? movies.map((e) => (
        <MovieSearch
        movieId={e.id}
          key={e.id}
          overView={e.overview}
          image_URL={e.poster_path}
          title={e.title}
          year={e.release_date}
        />
      ))  : <Loading />
    }
    </div>
  );
}

export default MovieGrid;