import React,{useState,useEffect} from 'react';
import { fetchMovies } from '../media/mediaApi';
import MovieSearch from './MovieSearch';
function MovieGrid({ searchContent, searchVal }) {
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
    <div className="flex h-fit w-full  flex-col gap-2">
      {movies.map((e) => (
        <MovieSearch
          key={e.id}
          overView={e.overview}
          image_URL={e.poster_path}
          title={e.title}
          year={e.release_date}
        />
      ))}
    </div>
  );
}

export default MovieGrid;