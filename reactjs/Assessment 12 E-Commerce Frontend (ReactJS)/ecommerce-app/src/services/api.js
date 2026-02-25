import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);

export default api;