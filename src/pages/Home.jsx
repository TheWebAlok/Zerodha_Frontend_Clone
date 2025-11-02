import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-user-shield"></i>
            <h3>Secure Login</h3>
            <p>We use advanced encryption to keep your data safe and secure.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-bolt"></i>
            <h3>Fast Performance</h3>
            <p>Experience seamless navigation and quick access to your dashboard.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>Join a growing network of users and share your experience.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
