import React, { memo } from "react";
import useMovieList from "./movieList.hooks";
import MovieCard from "./components/card";

const MovieList = memo(() => {
  const { movieList, handleScrollView } = useMovieList();
  return (
    <>
      <div
        className='MovieList u-container--scroll'
        onScroll={handleScrollView}>
        <MovieCard movies={movieList} />
      </div>
    </>
  );
});

export default MovieList;
