import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import "./sidebar.scss";

function Sidebar() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    if (sidebarOpened) {
      setSidebarOpened(false);
    } else {
      setSidebarOpened(true);
    }
  };

  const navigation = [
    {
      name: "Početna",
      link: "/",
    },
    {
      name: "Namještaj",
      link: "/furniture",
    },
    {
      name: "O nama",
      link: "/about-us",
    },
    {
      name: "Katalozi i flajeri",
      link: "/catalogs-and-flyers",
    },
    {
      name: "Zaposlenje",
      link: "/employment",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Kontakt",
      link: "/contact",
    },
  ];

  return (
    <div>
      <Nav className="navbar-top">
        <Nav.Item>
          <Nav>
            <NavLink to="/" className="logo">
              <img
                src={process.env.PUBLIC_URL + "images/header/logo.png"}
                alt="Logo"
              />
            </NavLink>
          </Nav>
        </Nav.Item>
        <Nav.Item>
          <Nav>
            <Button
              onClick={toggleSidebar}
              className={"toggler" + " " + (sidebarOpened ? "active" : "")}
            >
              <a href="#" className="menu">
                <span></span>
              </a>
            </Button>
          </Nav>
        </Nav.Item>
      </Nav>
      <Nav className={"sidebar" + " " + (sidebarOpened ? "show" : "hide")}>
        <Nav.Item
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Nav>
            <NavLink to="/" className="logo">
              <img
                src={process.env.PUBLIC_URL + "images/header/logo.png"}
                alt="Logo"
              />
            </NavLink>
          </Nav>
        </Nav.Item>

        {navigation.map((item, idx) => (
          <Nav.Item
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Nav>
              <NavLink to={item.link}>{item.name}</NavLink>
            </Nav>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
