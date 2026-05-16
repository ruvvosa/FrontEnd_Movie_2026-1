import starIcon from "../../assets/star-icon.svg";
import { IMAGE_BASE_URL } from "../../constants/movie";
import type { Movie } from "../../types/movie";
import "./MovieCard.css";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card" data-movie-id={movie.id}>
      <div className="movie-card-poster">
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
      </div>

      <div className="movie-card-title">
        <p>{movie.title}</p>
      </div>

      <div className="movie-card-rating">
        <div className="movie-card-rating-value">
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>

        <img className="movie-card-star" src={starIcon} alt="별점" />
      </div>
    </div>
  );
}

export default MovieCard;
