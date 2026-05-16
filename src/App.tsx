import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { sampleMovies } from "./mocks/movies";
import "./App.css";
import { useState, useEffect } from "react";
import type { Movie } from "./types/movie";
import { fetchPopularMovies } from "./apis/movieApi";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // TODO 5. 영화 목록을 저장할 state를 만드세요.
  // 힌트: useState를 import한 뒤 아래 형태로 작성합니다.
  // const [movies, setMovies] = useState<Movie[]>([])
  useEffect(() => {
    async function loadMovies() {
      const movies = await fetchPopularMovies();
      setMovies(movies);
    }

    loadMovies();
  }, []);
  // TODO 6. 컴포넌트가 처음 렌더링될 때 인기 영화 목록을 불러오세요.
  // 힌트: useEffect를 import한 뒤 fetchPopularMovies()를 호출합니다.
  // 힌트: 가져온 영화 목록은 setMovies로 저장합니다.

  return (
    <>
      <Header />

      <main className="main-content">
        {/* TODO 7. sampleMovies 대신 state에 저장된 movies를 전달하세요. */}
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
