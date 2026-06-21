import "./Mypage.css";
import profileImage from "../../assets/cat.jpg";
import MovieCard from "../MovieCard/MovieCard";
import { sampleMovies } from "../../mocks/movies";
import { useState } from "react";

type MovieTab = "rated" | "wanted";

function Mypage() {
  const [selectedTab, setSelectedTab] = useState<MovieTab>("rated");
  const movies = selectedTab === "rated" ? sampleMovies : sampleMovies; //일단 임시샘플 데이터

  return (
    <div className="mypage">
      <div className="mypage-container">
        <div className="profile-info">
          <img src={profileImage} alt="프로필 사진" className="profile-image" />
          <p>닉네임</p>
          <p>
            평가 영화 수 : <strong>122</strong>
          </p>
          <p>선호 장르 : 공포, 액션, 로맨스</p>
        </div>
      </div>
      <nav className="movie-menu">
        <ul>
          <li>
            <button
              type="button"
              className={selectedTab === "rated" ? "active" : ""}
              onClick={() => setSelectedTab("rated")}
            >
              평가한 영화
            </button>
          </li>
          <li>
            <button
              type="button"
              className={selectedTab === "wanted" ? "active" : ""}
              onClick={() => setSelectedTab("wanted")}
            >
              보고싶은 영화
            </button>
          </li>
        </ul>
      </nav>

      <div className="my-movie-list">
        {movies.length > 0 ? (
          <div className="my-movies">
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
