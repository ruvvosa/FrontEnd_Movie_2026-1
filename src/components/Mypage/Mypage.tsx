import profileImage from "../../assets/cat.jpg";
import starIcon from "../../assets/star-icon.svg";
import { IMAGE_BASE_URL } from "../../constants/movie";
import { useState } from "react";
import {
  getRatedMovies,
  getWantedMovies,
  type SavedMovie,
} from "../../utils/movieStorage";

type MovieTab = "rated" | "wanted";

function Mypage() {
  const [selectedTab, setSelectedTab] = useState<MovieTab>("rated"); //현재 선택된 탭을 관리하는 상태
  const [ratedMovies] = useState(getRatedMovies);
  const [wantedMovies] = useState(getWantedMovies);
  const movies = selectedTab == "rated" ? ratedMovies : wantedMovies;

  //영화 카드 렌더링 함수
  //여기 컴포넌트 재사용 가능성 검토,데이터 구조가 달라서 고민중
  function renderMovieCard(movie: SavedMovie) {
    return (
      <div key={movie.id} className="w-[182px] flex flex-col gap-[8px]">
        <div className="w-[182px] h-[273px] rounded-[15px] overflow-hidden bg-[#222]">
          <img
            className="w-full h-full object-cover block"
            src={IMAGE_BASE_URL + movie.posterPath}
            alt={movie.title}
          />
        </div>
        <p className="m-0 text-[18px] font-semibold leading-[1.3] text-[#ffff]">
          {movie.title}
        </p>
        {selectedTab === "rated" ? (
          <div className="flex items-center gap-[4px] min-h-[28px]">
            <span className="text-[20px] font-medium text-[#fff]">
              {movie.rating}
            </span>
            <img className="w-[20px] h-[20px]" src={starIcon} alt="별점" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="w-[1000px] mt-[154px] mx-[auto] mb-[0]">
      <div className="h-[390px] bg-[#262626] rounded-[16px] px-[24px] py-[32px]">
        <div className="flex flex-col items-start gap-[12px] text-[white]">
          <img
            src={profileImage}
            alt="프로필 사진"
            className="w-[150px] h-[150px] rounded-[150px]"
          />
          <p className="m-0 font-[Inter] font-semibold text-[32px] leading-normal">
            닉네임
          </p>
          <p className="m-0 font-[Inter] font-semibold text-[32px] leading-normal">
            평가한 영화 수:{" "}
            <strong className="text-[#ff3b4d]">{ratedMovies.length}</strong>
          </p>
          <p className="m-0 font-[Inter] font-semibold text-[32px] leading-normal">
            선호 장르 : 공포, 액션, 로맨스
          </p>
        </div>
      </div>
      <nav className="text-[white] mt-[18px]">
        <ul className="flex items-center gap-[24px] m-0 p-0 list-none border-b border-solid border-gray-400 text-[24px] leading-[32px]">
          <li>
            <button
              className={`relative pt-[20px] px-0 pb-[10px] border-0 bg-transparent text-inherit font-[Inter] cursor-pointer [&.active]:after:absolute [&.active]:after:right-0 [&.active]:after:bottom-0 [&.active]:after:left-0 [&.active]:after:h-[3px] [&.active]:after:bg-[#ff3b4d] [&.active]:after:content-[''] ${selectedTab === "rated" ? "active" : ""}`}
              onClick={() => setSelectedTab("rated")}
            >
              평가한 영화
            </button>
          </li>
          <li>
            <button
              className={`relative pt-[20px] px-0 pb-[10px] border-0 bg-transparent text-inherit font-[Inter] cursor-pointer [&.active]:after:absolute [&.active]:after:right-0 [&.active]:after:bottom-0 [&.active]:after:left-0 [&.active]:after:h-[3px] [&.active]:after:bg-[#ff3b4d] [&.active]:after:content-[''] ${selectedTab === "wanted" ? "active" : ""}`}
              onClick={() => setSelectedTab("wanted")}
            >
              보고싶은 영화
            </button>
          </li>
        </ul>
      </nav>
      //영화 카드 렌더링
      <div className="pt-[94px]">
        {movies.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-[64px]">
            {movies.map((movie) => renderMovieCard(movie))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Mypage;
