import React, { useState, useEffect } from "react";
import "./home.scss";
import HomeHeader from "./home-components/home-header";
import HomeBanner from "./home-components/home-banner";
import TopProducts from "./home-components/top-products";
import Catalogs from "./home-components/catalogs";
import Gallery from "./home-components/gallery";
import Services from "./home-components/services";

function Home() {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeBanner></HomeBanner>
      <TopProducts></TopProducts>
      <Catalogs></Catalogs>
      <Services></Services>
      <Gallery></Gallery>
    </div>
  );
}

export default Home;
