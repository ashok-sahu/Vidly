import http from "../utils/axios";

export function getGenres() {
  return http.get("http://localhost:5000/api/v1/genres")
}
