import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        {/* <img src="media/homeHero.png" alt="Hero Image" className="mb-5" /> */}
        <h1 className="mb-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <Link class="nav-link active" aria-current="page" to="/signup">
          <button
            className="p-3 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
