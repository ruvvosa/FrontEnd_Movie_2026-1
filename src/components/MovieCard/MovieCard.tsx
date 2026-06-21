import starIcon from "../../assets/star-icon.svg";
import { IMAGE_BASE_URL } from "../../constants/movie";
import type { Movie } from "../../types/movie";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div
      className="w-[182px] flex flex-col gap-[8px]"
      data-movie-id={movie.id}
      onClick={() => onClick(movie)}
    >
      <div className="w-[182px] h-[273px] rounded-[15px] overflow-hidden bg-[#222]">
        <img
          className="w-full h-full object-cover block"
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
        />
      </div>

      <div className="m-0 text-[18px] font-semibold leading-[1.3] text-[#ffff]">
        <p className="m-0">{movie.title}</p>
      </div>

      <div className="flex items-center gap-[4px] min-h-[28px]">
        <div className="text-[20px] font-medium text-[#fff]">
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>

        <img className="w-[20px] h-[20px]" src={starIcon} alt="별점" />
      </div>
    </div>
  );
}

export default MovieCard;
