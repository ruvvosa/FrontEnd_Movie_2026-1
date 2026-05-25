import type { Movie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

interface MovieListProps {
  movies: Movie[];
  handleMoreMovies: () => Promise<void>;
  onMovieClick: (movie: Movie) => void;
}

function MovieList({ movies, handleMoreMovies, onMovieClick }: MovieListProps) {
  return (
    <section className="movie-list">
      <h2 className="movie-list-title">지금 인기있는 영화</h2>
      <div className="movies" data-movie-count={movies.length}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
      //event handling
      <button className="more-button" onClick={handleMoreMovies}>
        더보기
      </button>
    </section>
  );
}

export default MovieList;
