import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api"; // ✅ named import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("All fields are required!", { position: "top-right" });
      return;
    }

    try {
      const { data } = await login({ email, password });
      
      // Store token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(data.message, { position: "top-right" });

      setTimeout(() => navigate("/"), 1500); // redirect after toast
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="login-container">
      <form
        className="login-form needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2>Log In</h2>
        <p>Login here using your email and password</p>

        <div className="input-group">
          <input
            className="form-control"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div className="input-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit">Log In</button>

        <div className="links">
          <a href="/forgot-password">
            <button type="button">Forgot Password</button>
          </a>
          <a href="/signup">
            <button type="button">Sign Up</button>
          </a>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
