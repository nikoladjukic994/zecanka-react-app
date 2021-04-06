import React, { useState, useEffect } from "react";
import "./in-progress.scss";
import Particles from "react-particles-js";

function InProgress() {
  return (
    <div className="in-progress-page">
      <Particles
        params={{
          particles: {
            color: {
              value: "#000000",
            },
            line_linked: {
              color: {
                value: "#000000",
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
      <div className="in-progress-heading">
        {/* <h1>404</h1> */}
        <h2>Stranica u izradi</h2>
      </div>
    </div>
  );
}

export default InProgress;
