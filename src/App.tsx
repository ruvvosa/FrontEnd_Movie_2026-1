import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { sampleMovies } from "./mocks/movies";
import "./App.css";
import { useState, useEffect } from "react";
import type { Movie } from "./types/movie";
import { fetchPopularMovies } from "./apis/movieApi";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const movies = await fetchPopularMovies();
      setMovies(movies);
    }

    loadMovies();
  }, []);

  return (
    <>
      <Header />

      <main className="main-content">
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
