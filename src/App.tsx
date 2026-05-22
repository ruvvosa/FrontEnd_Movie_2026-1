import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { sampleMovies } from "./mocks/movies";
import "./App.css";
import { useState, useEffect, use } from "react";
import type { Movie } from "./types/movie";
import { fetchPopularMovies } from "./apis/movieApi";
import { searchMovies } from "./apis/searchMovieApi";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]); //영화 데이터를 저장하는 상태
  const [page, setPage] = useState(1); //현재 페이지를 저장하는 상태
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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

  async function handleSubmit() {
    //검색어가 없는 경우 인기 영화 목록을 불러옴
    if (!search.trim()) {
      //trim 문자열의 양 끝에 있는 공백 제거
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

  return (
    <>
      <Header handleSearch={handleSearch} handleSubmit={handleSubmit} />

      <main className="main-content">
        <MovieList movies={movies} handleMoreMovies={handleMoreMovies} />
      </main>
    </>
  );
}

export default App;
