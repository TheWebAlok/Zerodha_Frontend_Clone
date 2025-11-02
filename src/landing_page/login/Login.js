import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await API.post("/auth/login", { email, password });
    
    // Store token and user info
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user)); // <-- add this

    toast.success(data.message, { position: "top-center" });

    setTimeout(() => navigate("/"), 1500); // redirect after toast
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed", {
      position: "top-center",
    });
  }
};


  return (
    <div className="login-container">
      <form className="login-form needs-validation" noValidate onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <p>Login here using your username and password</p>

        <div className="input-group">
          <input
            className="form-control"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
