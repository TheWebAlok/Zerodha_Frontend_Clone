import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-backend-clone.vercel.app/api",
});

export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
export const forgotPassword = (emailOrUsername) =>
  API.post("/auth/forgot-password", { emailOrUsername });
export const resetPassword = (userId, newPassword) =>
  API.post("/auth/reset-password", { userId, newPassword });

export default API;
