import type { Movie } from "../../types/movie";
import { IMAGE_BASE_URL } from "../../constants/movie";
import "./MovieDetail.css";
import closeIcon from "../../assets/closeBtn.svg";
import starIcon from "../../assets/star-icon.svg";
import blankStarIcon from "../../assets/blank_star.svg";
import heartIcon from "../../assets/heart.svg";
import blankHeartIcon from "../../assets/blank_heart.svg";
import { useState } from "react";
import { fetchGenres } from "../../apis/genre";

interface DetailModalProps {
  movie: Movie;
  onClose: () => void; //닫기 버튼 클릭 시 호출되는 함수
}

function DetailModal({ movie, onClose }: DetailModalProps) {
  const [isheart, setIsHeart] = useState(false); //하트 클릭 여부 상태
  const [rating, setRating] = useState<number>(0); //별점 상태
  return (
    <div className="detail-modal">
      <div className="modal-header">
        <p>{movie.title}</p>
        <button onClick={onClose}>
          <img src={closeIcon} alt="닫기 버튼" />
        </button>
      </div>
      <div className="modal-content">
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
        <div className="movie-content">
          <div className="content-header">
            <div className="content-info">
              <p>장르</p>
              <div className="modal-rating">
                <img src={starIcon} alt="별"></img>
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
            <button onClick={() => setIsHeart((prev) => !prev)}>
              <img src={isheart ? heartIcon : blankHeartIcon} alt="하트" />
            </button>
          </div>
          <p>{movie.overview}</p>
          <div className="my-rating">
            <div className="rating-content">
              <p>내 별점</p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    className="star"
                    src={i <= rating ? starIcon : blankStarIcon}
                    onClick={() => setRating(i)}
                  />
                ))}
              </div>

              <span>{rating}</span>
              <p>보통이에요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
