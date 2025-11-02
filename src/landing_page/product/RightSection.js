import React from 'react';

function RightSection(
      {
            imageUrl,
            productName,
            ProductDescription,
           
            learnMore,
      }
) {
      return ( <div className="container ">
            <div className="row p-5">
              
              <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{ProductDescription}</p>
                <div className="">
                  
                  <a
                    href={learnMore}
                    style={{ textDecoration: "none" }}
                  >
                    learn More{" "}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
                
              </div>
              <div className="col-6 ">
                <img src={imageUrl} />
              </div>
            </div>
          </div> );
}

export default RightSection;