import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 13+ crore customer trust zerodha with 3.5 lakh crore
            worth of equality investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks </h2>
          <p className="text-muted">
            no gimmicks spam "gamification", or annoying push notification high
            quality apps that you use at your pace the way you like
          </p>

          <h2 className="fs-4">The Zerodha universe </h2>
          <p className="text-muted">
            Not justan app but a whole ecosystem. Our investments in 30+ fintech
            startup offers you tailored service specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and kill Switch, we don't just
            facilitate transaction but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center">
            <a href="" style={{ textDecoration: "none" }} className="mx-5 ">
              Explore our product
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }} className="mx-5">
              {" "}
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
