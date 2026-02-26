import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API
});

export const loginUser = (data) =>
  api.post("/login", data);

export default api;