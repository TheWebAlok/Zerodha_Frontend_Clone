import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  p-5 mt-5 border-top  mb-5">
        <h1 className="fs-2  text-center">People</h1>
      </div>

      <div
        className="row  p-5 mt-5 border-top text-muted fs-6"
        style={{ lineHeight: "1.8" , fontSize: "1.2em"}}
      >
        <div className="col-6 p-5 text-center">
        <img src="/media/nithinKamath.jpg" alt="images" style={{ borderRadius: "100%", width: "60%" }} />
            
            <h4 className="mt-5"> Nithin Kamath</h4>
            <h5 >CEO Founder</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            This project aims to develop a user-friendly and efficient web
            application that addresses a real-world problem by leveraging modern
            web technologies. It focuses on delivering an intuitive interface,
            seamless navigation, and effective functionality.
          </p>
          <p>
            This project aims to develop a user-friendly and efficient web
            application that addresses a real-world problem by leveraging modern
            web technologies. It focuses on delivering an intuitive interface,
            seamless navigation, and effective functionality.
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Team;
