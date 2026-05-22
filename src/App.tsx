import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { sampleMovies } from "./mocks/movies";
import "./App.css";
import { useState, useEffect, use } from "react";
import type { Movie } from "./types/movie";
import { fetchPopularMovies } from "./apis/movieApi";
import { searchMovies } from "./apis/searchMovieApi";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      const movies = await fetchPopularMovies(page);
      setMovies(movies);
    }

    loadMovies();
  }, []);

  async function handleMoreMovies() {
    const nextPage = page + 1;

    if (isSearching) {
      const searchResults = await searchMovies(search, nextPage);
      setMovies((preMovies) => [...preMovies, ...searchResults]);
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
    if (!search.trim()) {
      setIsSearching(false);
      const movies = await fetchPopularMovies(1);
      setMovies(movies);
      setPage(1);
    } else {
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
