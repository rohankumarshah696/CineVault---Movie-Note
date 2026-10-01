import { useState } from 'react'
import { fetchMovieGenreIds, fetchTVGenreIds } from '../media/mediaApi'
import { DiscoverTvShows, DiscoverMovies } from '../media/mediaApi.js'

let headerval = 'Movies';
let pageNo=1;
let MovieTv
async function getMoviesOrTvs(header,page){
    if (headerval !== header ) {
        MovieTv = null;
        headerval = header;
        
    }

    if (!MovieTv || pageNo !=page) {
        MovieTv = header === "Movies"
            ? await DiscoverMovies(page)
            : await DiscoverTvShows(page);
            pageNo = page 
    }
    return MovieTv;
}

function checkPopularity(header, res, popularity) {
    if (popularity === "Popularity") res = res
    else if (popularity == "Rating (High)") res = res.sort((a, b) => b.vote_average ? b.vote_average - a.vote_average : b.popularity - a.popularity)
    else if (popularity == "Rating (Low)") res = res.sort((a, b) => a.vote_average ? a.vote_average - b.vote_average : a.popularity - b.popularity)
    res = popularity === "Newest"
        ? res.sort((a, b) =>
            b.release_date ? new Date(b.release_date) - new Date(a.release_date) : new Date(b.first_air_date) - new Date(a.first_air_date)
        )
        : res;
    res = popularity === "Oldest"
        ? res.sort((a, b) =>
            b.release_date ? new Date(a.release_date) - new Date(b.release_date) : new Date(a.first_air_date) - new Date(b.first_air_date)
        )
        : res;

    return res;
}


function checkYear(header, res, year) {
    res = year === "All Years" ? res : res.filter((movie) => Number(movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)) === Number(year));
    return res;
}


function checkRating(header, res, rating) {
    res = rating === "All Ratings" ? res : res.filter(movie => Number(movie.vote_average) >= Number(rating[0]));
    return res;
}

let genreIds
async function checkGenre(header, res, genre) {
    if (genre === "All Genres") return res;

    if (genre === "Sci-Fi") {
        genre = header === "Movies"
            ? "Science Fiction"
            : "Sci-Fi & Fantasy";
    }

    if (headerval !== header) {
        genreIds = null;
        headerval = header;
    }

    if (!genreIds) {
        genreIds = header === "Movies"
            ? await fetchMovieGenreIds()
            : await fetchTVGenreIds();
    }

    const genreId = genreIds.find(ids => ids.name === genre)?.id;

    if (!genreId) return res;

    return res.filter(movie => movie.genre_ids.includes(genreId));
}

export { checkGenre, checkPopularity, checkRating, checkYear,getMoviesOrTvs }