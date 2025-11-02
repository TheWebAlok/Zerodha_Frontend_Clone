import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002/api",
});

// SIGNUP
export const signup = (data) => API.post("/auth/signup", data);

// LOGIN
export const login = (data) => API.post("/auth/login", data);

// FORGOT PASSWORD
export const forgotPassword = (emailOrUsername) =>
  API.post("/auth/forgot-password", { emailOrUsername });

// RESET PASSWORD
export const resetPassword = (userId, newPassword) =>
  API.post("/auth/reset-password", { userId, newPassword });

export default API;
