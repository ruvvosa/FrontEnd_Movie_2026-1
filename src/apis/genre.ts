import { BASE_URL } from "../constants/movie";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

//api 호출 함수
export async function fetchGenres() {
  const response = await fetch(`${BASE_URL}genre/movie/list?language=ko-KR`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("장르 요청 실패");
  }
  const res = await response.json();
  return res.genres;
}
