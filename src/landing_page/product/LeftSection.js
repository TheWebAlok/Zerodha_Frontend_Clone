import React from "react";

function LeftSection({
  imageUrl,
  productName,
  ProductDescription,
  tryMore,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6">
          <img src={imageUrl} alt="product" style={{ width: "100%" }} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>

          {/* Try / Learn More Links */}
          <div>
            <a href={tryMore || "#"} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href={learnMore || "#"}
              style={{ marginLeft: "120px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="mt-4">
            <a href={googlePlay || "#"}>
              <img src="media/googlePLayBadge.svg" alt="Google Play" />
            </a>

            <a href={appStore || "#"}>
              <img
                src="media/appstoreBadge.svg"
                alt="App Store"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
