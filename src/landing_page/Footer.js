import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p>&copy; 2025 - 2050, Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          {/* ================= COMPANY ===================== */}
          <div className="col">
            <p style={{ fontWeight: 600, fontSize: "28px", color: "grey" }}>
              Company
            </p>

            <a href="/about" className="footer-link">About</a><br />
            <a href="/products" className="footer-link">Products</a><br />
            <a href="/pricing" className="footer-link">Pricing</a><br />
            <a href="/referral" className="footer-link">Referral programme</a><br />
            <a href="/careers" className="footer-link">Careers</a><br />
            <a href="https://zerodha.tech" target="_blank" className="footer-link">
              Zerodha.tech
            </a><br />
            <a href="/media" className="footer-link">Press & Media</a><br />
            <a href="/csr" className="footer-link">Zerodha Cares (CSR)</a><br />
          </div>

          {/* ================= SUPPORT ===================== */}
          <div className="col">
            <p style={{ fontWeight: 600, fontSize: "28px", color: "grey" }}>
              Support
            </p>

            <a href="/contact" className="footer-link">Contact us</a><br />
            <a href="/support" className="footer-link">Support portal</a><br />
            <a href="/blog" className="footer-link">Z-Connect blog</a><br />
            <a href="/charges" className="footer-link">List of charges</a><br />
            <a href="/downloads" className="footer-link">Downloads & resources</a><br />
            <a href="/videos" className="footer-link">Videos</a><br />
            <a href="/market" className="footer-link">Market overview</a><br />
            <a href="/complaint" className="footer-link">How to file a complaint?</a><br />
            <a href="/status" className="footer-link">Status of your complaints</a><br />
          </div>

          {/* ================= ACCOUNT ===================== */}
          <div className="col">
            <p style={{ fontWeight: 600, fontSize: "28px", color: "grey" }}>
              Account
            </p>

            <a href="/open-account" className="footer-link">Open an account</a><br />
            <a href="/fund-transfer" className="footer-link">Fund transfer</a><br />
          </div>
        </div>

        {/* Long Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 ...
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal...
          </p>

          <p>Smart Online Dispute Resolution</p>

          <p>
            Investments in securities market are subject to market risks...
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as...
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="container">
        <div className="d-flex flex-row mb-3">
          <a href className="footer-bottom-item">NSE</a>
          <a href className="footer-bottom-item">BSE</a>
          <a href className="footer-bottom-item">MCX</a>
          <a href className="footer-bottom-item">Terms & conditions</a>
          <a href className="footer-bottom-item">Policies & procedures</a>
          <a href className="footer-bottom-item">Privacy policy</a>
          <a href className="footer-bottom-item">Disclosure</a>
          <a href className="footer-bottom-item">For investor attention</a>
          <a href className="footer-bottom-item">Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
