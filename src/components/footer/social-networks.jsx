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
  );
}

export default Footer;
