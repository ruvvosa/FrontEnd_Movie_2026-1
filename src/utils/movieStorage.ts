import type { Movie } from "../types/movie";

//키 이름
const RATED_MOVIES = "ratedMovies";
const WANTED_MOVIES = "wantedMovies";

export interface SavedMovie {
  id: number;
  title: string;
  rating: number;
  posterPath?: string | null;
}

function toSavedMovie(movie: Movie, rating = 0): SavedMovie {
  return {
    id: movie.id,
    title: movie.title,
    rating,
    posterPath: movie.poster_path,
  };
}

//로컬 스토리지에 저장하는 함수
function saveMovies(key: string, movies: SavedMovie[]) {
  localStorage.setItem(key, JSON.stringify(movies));
}
// 로컬스토리지에 저장해 둔 영화 목록을 꺼내오는 함수
function getMovies(key: string): SavedMovie[] {
  const savedMovies = localStorage.getItem(key);
  return savedMovies ? JSON.parse(savedMovies) : [];
}

//평가한 영화를 저장하는 함수

export function saveRatedMovie(movie: Movie, rating: number) {
  const movies = getMovies(RATED_MOVIES); //이전 평가 했던 목록을 가져옴
  const savedMovie = toSavedMovie(movie, rating);

  saveMovies(RATED_MOVIES, [...movies, savedMovie]);
}

//평가한 영화 목록들을 가져오는 함수
export function getRatedMovies() {
  return getMovies(RATED_MOVIES);
}

//찜한 영화를 저장하는 함수
export function saveWantedMovie(movie: Movie) {
  const movies = getMovies(WANTED_MOVIES);
  const savedMovie = toSavedMovie(movie);

  saveMovies(WANTED_MOVIES, [...movies, savedMovie]);
}

//찜한 영화 목록들을 가져오는 함수
export function getWantedMovies() {
  return getMovies(WANTED_MOVIES);
}

//평가한 영화의 평점 내용
export function getMovieRating(movieId: number) {
  const movie = getRatedMovies().find(({ id }) => id == movieId);
  return movie ? movie.rating : 0;
}
//찜한 영화인지 확인하는 함수
export function isWantedMovie(movieId: number) {
  return getWantedMovies().some(({ id }) => id == movieId);
}

//일단 여기까지 완료
