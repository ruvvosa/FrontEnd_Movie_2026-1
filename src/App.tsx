import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import { useState, useEffect } from "react";
import type { Movie } from "./types/movie";
import { fetchPopularMovies } from "./apis/movieApi";
import { searchMovies } from "./apis/searchMovieApi";
import DetailModal from "./components/MovieDetail/MovieDetail";
import Toast from "./components/Toast/Toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mypage from "./pages/mypage";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]); //영화 데이터를 저장하는 상태
  const [page, setPage] = useState(1); //현재 페이지를 저장하는 상태
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isDetailOpen, setDetailOpen] = useState(false); //모달 열린지 확인하는 상태
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); //어떤 영화가 선택됐는지 저장하는 상태

  useEffect(() => {
    //영화 데이터를 불러오는 함수
    async function loadMovies() {
      const movies = await fetchPopularMovies(page);
      setMovies(movies);
    }

    loadMovies();
  }, []);

  //다음 페이지(더 많은 영화)를 불러오는 함수
  async function handleMoreMovies() {
    const nextPage = page + 1;

    if (isSearching) {
      const searchResults = await searchMovies(search, nextPage);
      setMovies((preMovies) => [...preMovies, ...searchResults]); //이전 영화 목록과 새로운 검색 결과를 합쳐서 상태 업데이트
    } else {
      const nextMovies = await fetchPopularMovies(nextPage);
      setMovies((preMovies) => [...preMovies, ...nextMovies]);
    }
    setPage(nextPage);
  }

  async function handleSearch(query: string) {
    setSearch(query);
  }

  //검색어가 없는 경우 인기 영화 목록을 불러옴
  async function handleSubmit() {
    //trim 문자열의 양 끝에 있는 공백 제거
    if (!search.trim()) {
      setIsSearching(false);
      const movies = await fetchPopularMovies(1);
      setMovies(movies);
      setPage(1);
    } else {
      //검색어가 있는 경우 검색 결과를 불러옴
      const searchResults = await searchMovies(search, 1);
      setMovies(searchResults);
      setIsSearching(true);
      setPage(1);
    }
  }

  async function handleMovieClick(movie: Movie) {
    setSelectedMovie(movie); //선택된 영화 정보를 상태에 저장
    setDetailOpen(true);
  }

  let Modal = null;

  if (isDetailOpen && selectedMovie) {
    Modal = (
      <DetailModal
        movie={selectedMovie}
        // isOpen={isDetailOpen} //중복이어서 제거함
        onClose={() => setDetailOpen(false)}
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header handleSearch={handleSearch} handleSubmit={handleSubmit} />
              <main className="main-content">
                <MovieList
                  movies={movies}
                  handleMoreMovies={handleMoreMovies}
                  onMovieClick={handleMovieClick}
                />
              </main>
              {Modal}
            </>
          }
        />
        <Route
          path="/mypage"
          element={
            <Mypage handleSearch={handleSearch} handleSubmit={handleSubmit} />
          }
        />
      </Routes>
      <Toast />
    </BrowserRouter>
  );
}

export default App;
