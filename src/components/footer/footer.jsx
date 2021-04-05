import React, { useState, useEffect } from "react";
import "./footer.scss";
import SocialNetworks from "./social-networks";

function Footer() {
  return (
    <div className="footer">
      <div
        className="footer-block"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src={process.env.PUBLIC_URL + "images/footer/certificate-1.svg"}
          alt="Certificate"
        />
        <div>
          <h3>Excellent sertifikat</h3>
          <p>
            Prema izboru privredne komore Crne Gore naše preduzeće je svrstano u
            grupu uspješnih i pouzdanih preduzeća
          </p>
        </div>
      </div>
      <div
        className="footer-block"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src={process.env.PUBLIC_URL + "images/footer/certificate-2.svg"}
          alt="Certificate"
        />
        <div>
          <h3>Već 23 godine sa vama</h3>
          <p>
            Sigurna kupovina po visokim standardima 23 godine gradimo povjerenje
            i stičemo na stotine zadovoljnih kupaca
          </p>
        </div>
      </div>
      <div
        className="footer-block"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div>
          <SocialNetworks></SocialNetworks>
          <p>© 2021 Zećanka Sva prava zadržana.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
