import type { Movie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  movies: Movie[];
  handleMoreMovies: () => Promise<void>;
  onMovieClick: (movie: Movie) => void;
}

function MovieList({ movies, handleMoreMovies, onMovieClick }: MovieListProps) {
  return (
    <section className="flex flex-col gap-[48px] w-[920px] max-w-full">
      <h2 className="m-0 text-[34px] font-semibold leading-[36px] text-[rgba(255,_255,_255,_0.87)]">
        지금 인기있는 영화
      </h2>
      <div
        className="grid grid-cols-[repeat(4,_182px)] gap-[64px]"
        data-movie-count={movies.length}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
      <button
        className="w-[920px] h-[60px] bg-[#f33f3f] text-[#ffffff] border-[1px] border-[solid] border-[#f33f3f] [box-shadow:0px_1px_2px_0px_#1018280d] rounded-[8px] px-[28px] py-[16px] gap-[12px] font-[Inter] text-[18px] font-semibold leading-[28px] tracking-[0%]"
        onClick={handleMoreMovies}
      >
        더보기
      </button>
    </section>
  );
}

export default MovieList;
