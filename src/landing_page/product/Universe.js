import React from "react";

function Universe({
  imageUrl,
  productName,
  ProductDescription,

  learnMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and Investment experience even further with our
          partner platform.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{height:"40px"}}/>
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{height:"30px"}} />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png"style={{height:"40px"}} />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/GoldenpiLogo.png" />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" style={{height:"40px"}} />
          <p className="text-small text-muted">Thematic Investment platform</p>
        </div>
        <button className="p-3 btn btn-primary fs-5" style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
