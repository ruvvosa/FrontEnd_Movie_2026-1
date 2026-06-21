import profileImage from "../../assets/cat.jpg";
import MovieCard from "../MovieCard/MovieCard";
import { sampleMovies } from "../../mocks/movies";
import { useState } from "react";

type MovieTab = "rated" | "wanted";

function Mypage() {
  const [selectedTab, setSelectedTab] = useState<MovieTab>("rated");
  const movies = selectedTab === "rated" ? sampleMovies : sampleMovies; //일단 임시샘플 데이터

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
            평가 영화 수 : <strong className="text-[#ff3b4d]">122</strong>
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

      <div className="pt-[94px]">
        {movies.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-[64px]">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={() => {}} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Mypage;
