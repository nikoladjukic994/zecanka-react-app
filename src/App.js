import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import AboutUs from "./components/about-us/about-us";
import Blog from "./components/blog/blog";
import CatalogsAndFlyers from "./components/catalogs-and-flyers/catalogs-and-flyers";
import Contact from "./components/contact/contact";
import Employment from "./components/employment/employment";
import Furniture from "./components/furniture/furniture";
import FurnitureSingle from "./components/furniture/furniture-single";
import NotFound from "./components/not-found/not-found";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/furniture">
            <Furniture />
          </Route>
          <Route path="/furniture-single-:id">
            <FurnitureSingle />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/catalogs-and-flyers">
            <CatalogsAndFlyers />
          </Route>
          <Route path="/employment">
            <Employment />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
