import React, { useState } from "react";
import { forgotPassword, resetPassword } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!emailOrUsername.trim()) {
      toast.error("Please enter email or username");
      return;
    }

    try {
      const { data } = await forgotPassword(emailOrUsername);
      toast.success(data.message);
      setUserId(data.userId);
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || "Verification failed");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!newPassword.trim()) {
      toast.error("Please enter new password");
      return;
    }

    try {
      const { data } = await resetPassword(userId, newPassword);
      toast.success(data.message);

      setStep(1);
      setEmailOrUsername("");
      setNewPassword("");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Password change failed");
    }
  };

  return (
    <div className="forgot-container">

      {step === 1 && (
        <form onSubmit={handleVerify} className="needs-validation" noValidate>
          <h2>Verify User</h2>

          <label className="form-label">Username / Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary mt-3">
            Verify
          </button>

          <span className="left">
            Back to <a href="/login">Login</a>
          </span>
          <span className="right">
            Back to <a href="/signup">Signup</a>
          </span>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleChangePassword}>
          <h2>Change Password</h2>

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-success">
            Change Password
          </button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
