// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../api";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Signup.css";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("/auth/signup", {
//         username,
//         email,
//         password,
//       });
//       toast.success(data.message, { position: "top-center" });
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Signup failed", {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>Signup</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>
//         <p className="account-text">
//           Already have an account?{" "}
//           <a href="/login" className="account-link">
//             Login
//           </a>
//         </p>
//       </form>

//       <ToastContainer />
//     </>
//   );
// };

// export default Signup;
