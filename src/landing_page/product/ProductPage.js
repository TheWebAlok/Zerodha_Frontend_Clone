import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/kite.png"
        productName="KIT"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        tryMore=""
        learnMore=""
        googlePLay=""
        appStore=""
      />
      <RightSection
        imageUrl="media/console.png"
        productName="Console"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/coin.png"
        productName="Coin"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        learnMore=""
         googlePLay=""
        appStore=""
      />
      <RightSection
      imageUrl="media/kiteconnect.png"
      productName="KIT Connect API"
      ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
      learnMore=""
    />
      <LeftSection
        imageUrl="media/varsity.png"
        productName="Varsity Mobile"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        learnMore=""
         googlePLay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">Want to know more about our Technology stack? Check out the Zerodha.tech blogs.</p>
    <Universe/>
    </>
  );
}

export default ProductPage;
