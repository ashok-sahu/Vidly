import http from "../utils/axios";
const apiEndpoint = "http://localhost:5000/api/v1/user";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  })
}
