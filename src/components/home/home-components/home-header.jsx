import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomeHeader() {
  return (
    <div>
      <div className="home-header">
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          Cjelokupna ponuda<br></br> simpo asortimana
        </h1>
        <NavLink
          to="/furniture"
          className="btn-red"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Pročitaj više
        </NavLink>
      </div>
    </div>
  );
}

export default HomeHeader;
