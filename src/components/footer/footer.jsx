import React, { useState, useEffect } from "react";
import "./footer.scss";
import certificate1 from "../../images/footer/certificate-1.svg";
import certificate2 from "../../images/footer/certificate-2.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <img src={certificate1} alt="Certificate" />
        <div>
          <h3>Excellent sertifikat</h3>
          <p>
            Prema izboru privredne komore Crne Gore naše preduzeće je svrstano u
            grupu uspješnih i pouzdanih preduzeća
          </p>
        </div>
      </div>
      <div className="footer-block">
        <img src={certificate2} alt="Certificate" />
        <div>
          <h3>Već 23 godine sa vama</h3>
          <p>
            Sigurna kupovina po visokim standardima 23 godine gradimo povjerenje
            i stičemo na stotine zadovoljnih kupaca
          </p>
        </div>
      </div>
      <div className="footer-block">
        <div>
          <div className="social-networks">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener">
              <FaYoutube></FaYoutube>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener">
              <FaInstagram></FaInstagram>
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener">
              <FaGooglePlusG></FaGooglePlusG>
            </a>
          </div>
          <p>© 2021 Zećanka All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
