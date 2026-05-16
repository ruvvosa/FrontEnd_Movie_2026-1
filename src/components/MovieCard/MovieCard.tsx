import starIcon from "../../assets/star-icon.svg";
import type { Movie } from "../../types/movie";
import "./MovieCard.css";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card" data-movie-id={movie.id}>
      {/* TODO 4. 영화 포스터 이미지를 렌더링하세요. */}
      {/* 힌트: className은 "movie-card-poster"입니다. */}
      {/* 힌트: src는 IMAGE_BASE_URL + movie.poster_path 입니다. */}
      {/* 힌트: alt는 movie.title을 사용하세요. */}
      <div className="movie-card-title">
        <p>{movie.title}</p>
      </div>
      {/* TODO 2. 영화 제목을 렌더링하세요. */}
      {/* 힌트: className은 "movie-card-title"입니다. */}

      <div className="movie-card-rating">
        <div className="movie-card-rating-value">
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
        {/* TODO 3. 평점을 소수점 한 자리까지 렌더링하세요. */}
        {/* 힌트: movie.vote_average.toFixed(1) */}
        {/* 힌트: className은 "movie-card-rating-value"입니다. */}

        <img className="movie-card-star" src={starIcon} alt="별점" />
      </div>
    </div>
  );
}

export default MovieCard;
