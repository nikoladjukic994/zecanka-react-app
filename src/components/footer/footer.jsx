import React, { useState, useEffect } from "react";
import "./footer.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

function Footer() {
  const social_networks = [
    {
      link: "https://www.facebook.com/",
      name: "Facebook",
      icon: <FaFacebookF></FaFacebookF>,
    },
    {
      link: "https://www.twitter.com/",
      name: "Twitter",
      icon: <FaTwitter></FaTwitter>,
    },
    {
      link: "https://www.youtube.com/",
      name: "Youtube",
      icon: <FaYoutube></FaYoutube>,
    },
    {
      link: "https://www.instagram.com/",
      name: "Instagram",
      icon: <FaInstagram></FaInstagram>,
    },
    {
      link: "https://www.google.com/",
      name: "Google",
      icon: <FaGooglePlusG></FaGooglePlusG>,
    },
  ];
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
          <div className="social-networks">
            {social_networks.map((item, idx) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p>© 2021 Zećanka Sva prava zadržana.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
