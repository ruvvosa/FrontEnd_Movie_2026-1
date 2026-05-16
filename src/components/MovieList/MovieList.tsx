import type { Movie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <section className="movie-list">
      <h2 className="movie-list-title">지금 인기있는 영화</h2>

      <div className="movies" data-movie-count={movies.length}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {/* TODO 1. movies 배열을 map으로 반복 렌더링하세요. */}
        {/* 힌트: MovieCard 컴포넌트를 사용하세요. */}
        {/* 힌트: MovieCard를 import해야 합니다. */}
        {/* 힌트: key에는 movie.id를 넣으세요. */}
      </div>
    </section>
  );
}

export default MovieList;
