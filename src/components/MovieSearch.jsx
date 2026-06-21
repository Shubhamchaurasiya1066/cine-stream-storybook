"use client";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import MovieGrid from "./MovieGrid";

export default function MovieSearch({ movies }) {
  const search = useSelector(
    (state) => state.filter.search
  );

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [movies, search]);

  return (
    <>
      <SearchBar />

      {filteredMovies.length > 0 ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <div className="text-center text-gray-400 text-2xl py-20">
          No movies found.
        </div>
      )}
    </>
  );
}