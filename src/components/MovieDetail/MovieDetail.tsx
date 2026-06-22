import type { Movie } from "../../types/movie";
import { IMAGE_BASE_URL } from "../../constants/movie";
import closeIcon from "../../assets/closeBtn.svg";
import starIcon from "../../assets/star-icon.svg";
import blankStarIcon from "../../assets/blank_star.svg";
import heartIcon from "../../assets/heart.svg";
import blankHeartIcon from "../../assets/blank_heart.svg";
import { useEffect, useState } from "react";
import {
  saveWantedMovie,
  getMovieRating,
  isWantedMovie,
  saveRatedMovie,
} from "../../utils/movieStorage";

interface DetailModalProps {
  movie: Movie;
  onClose: () => void;
}

function DetailModal({ movie, onClose }: DetailModalProps) {
  const [isheart, setIsHeart] = useState(() => isWantedMovie(movie.id)); //찜을 했는지 안했는지 확인하는 상태
  const [rating, setRating] = useState<number>(() => getMovieRating(movie.id)); //별점을 가져오는 상태

  // 영화 id가 바뀔 때마다 찜 여부와 별점을 업데이트
  useEffect(() => {
    setIsHeart(isWantedMovie(movie.id));
    setRating(getMovieRating(movie.id));
  }, [movie.id]);

  // 찜 버튼 클릭 및 로컬스토리지 저장
  function handleHeartClick() {
    const nextIsHeart = !isheart;
    setIsHeart(nextIsHeart);
    if (nextIsHeart) {
      saveWantedMovie(movie);
      return;
    }
  }

  // 별점 클릭 및 로컬스토리지 저장
  function handleRating(nextRating: number) {
    setRating(nextRating);
    saveRatedMovie(movie, nextRating);
  }
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#212122] flex flex-col w-[1000px] max-w-[95%] h-[720px] gap-[38px] rounded-bl-[8px] rounded-br-[8px]">
      <div className="relative h-[72px] flex items-center justify-center border-b border-[#f1f1f1]/25 font-semibold text-[24px] leading-[24px] tracking-[0.5px] text-white">
        <p>{movie.title}</p>
        <button className="absolute right-4" onClick={onClose}>
          <img src={closeIcon} alt="닫기 버튼" />
        </button>
      </div>
      <div className="flex flex-row px-[40px]">
        <img
          className="w-[360px] h-[560px]"
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
        />
        <div className="flex flex-col w-[520px] h-[560px] text-[#f1f1f1] gap-[16px] ml-[38px] text-[20px] leading-[24px] tracking-[0.5px]">
          <div className="flex justify-between">
            <div className="flex gap-[16px]">
              <p>장르</p>
              <div className="flex flex-row items-center gap-1">
                <img src={starIcon} alt="별" />
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
            <button onClick={handleHeartClick}>
              <img src={isheart ? heartIcon : blankHeartIcon} alt="하트" />
            </button>
          </div>
          <p>{movie.overview}</p>
          <div className="w-[539px] h-[80px] mt-auto gap-[12px] rounded-[16px] p-[16px] bg-[#383839] font-bold text-[20px] leading-[24px] tracking-[0.5px]">
            <div className="w-[473px] h-[48px] gap-[12px] flex items-center">
              <p>내 별점</p>
              <div className="w-[240px] flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    className="h-[48px] cursor-pointer"
                    src={i <= rating ? starIcon : blankStarIcon}
                    onClick={() => handleRating(i)}
                    alt="별점"
                  />
                ))}
              </div>
              <span>{rating}</span>
              <p className="font-normal text-[18px]">보통이에요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
