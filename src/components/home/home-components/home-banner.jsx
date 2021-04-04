import React, { useState, useEffect } from "react";

function HomeBanner() {
  return (
    <div>
      <div className="home-banner">
        <div
          className="banner banner-1"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2>
            <span>Velika jesenja</span> rasprodaja
            <br></br>
            popusti od 10-50%
          </h2>
          <img
            src={process.env.PUBLIC_URL + "images/home-banner/banner-1.png"}
            alt="Banner"
          />
        </div>
        <div
          className="banner banner-2"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2>
            <span>Rasprodaja izloga</span> baštenskog
            <br></br>
            namještaja popusti do 50%
          </h2>
          <img
            src={process.env.PUBLIC_URL + "images/home-banner/banner-2.png"}
            alt="Banner"
          />
        </div>
        <div
          className="banner banner-3"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2>
            Najnoviji modeli tehnike
            <br></br>
            <span>u našim salonima</span>
          </h2>
          <img
            src={process.env.PUBLIC_URL + "images/home-banner/banner-3.png"}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
