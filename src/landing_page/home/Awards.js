import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mb-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contributes to over 15% of all retail
            order volumes in India daily by trading and Investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Option</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct matual funds</li>
                <li>Bonds and Gov. Security</li>
              </ul>
            </div>
            <img src="media/pressLogos.png" style={{width:"90%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
