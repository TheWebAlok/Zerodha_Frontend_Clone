import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* <div className="row  p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div> */}

      <div className="row  p-5 mt-5 border-bottom text-center  ">
        <h1>Pricing</h1>
        <p className="text-muted mt-3 fs-5">
          Free equity investments and flat 20 traday and F&O trades
        </p>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4 fs-6 ">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted ">
            All equity delivery investments (NSE, BSE) are absolutely -0
            Brokerage.
          </p>
        </div>
        <div className="col-4 p-4 fs-6 ">
          <img src="media/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted ">
            flatRs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity currency and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4 fs-6 ">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>

          <p className="text-muted ">
            All direct mutual found investments are  absolutely Free 0 commission & DP charges. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
