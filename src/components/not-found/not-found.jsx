import React, { useState, useEffect } from "react";
import "./not-found.scss";
import Particles from "react-particles-js";

function NotFound() {
  return (
    <div className="error-page">
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
      <div className="error-heading">
        <h1>404</h1>
        <h2>Stranica nije pronadjena</h2>
      </div>
    </div>
  );
}

export default NotFound;
