import React, { useState, useEffect } from "react";
import "./home.scss";
import banner1 from "../../images/home-banner/banner-1.png";
import banner2 from "../../images/home-banner/banner-2.png";
import banner3 from "../../images/home-banner/banner-3.png";
import product1 from "../../images/products/product-1.png";
import product2 from "../../images/products/product-2.png";
import sample from "../../documents/sample.pdf";
import service1 from "../../images/services/service-1.png";
import service2 from "../../images/services/service-2.png";
import service3 from "../../images/services/service-3.png";
import service4 from "../../images/services/service-4.png";
import gallery1 from "../../images/gallery/gallery-1.png";
import gallery2 from "../../images/gallery/gallery-2.png";
import gallery3 from "../../images/gallery/gallery-3.png";
import gallery4 from "../../images/gallery/gallery-4.png";
import gallery5 from "../../images/gallery/gallery-5.png";

function Home() {
  return (
    <div>
      <div className="home-header">
        <h1>
          Cjelokupna ponuda<br></br> simpo asortimana
        </h1>
        <a href="" className="btn-red">
          Pročitaj više
        </a>
      </div>
      <div className="home-banner">
        <div className="banner banner-1">
          <h2>
            <span>Velika jesenja</span> rasprodaja
            <br></br>
            popusti od 10-50%
          </h2>
          <img src={banner1} alt="Banner" />
        </div>
        <div className="banner banner-2">
          <h2>
            <span>Rasprodaja izloga</span> baštenskog
            <br></br>
            namještaja popusti do 50%
          </h2>
          <img src={banner2} alt="Banner" />
        </div>
        <div className="banner banner-3">
          <h2>
            Najnoviji modeli tehnike
            <br></br>
            <span>u našim salonima</span>
          </h2>
          <img src={banner3} alt="Banner" />
        </div>
      </div>
      <div className="top-products">
        <h2>
          Naši <span>top</span> proizvodi
        </h2>
        <div className="product">
          <div className="img-wrap">
            <img src={product1} alt="Product" />
          </div>
          <h3>Pariska noć</h3>
          <span className="price">&euro;102.973,20</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product2} alt="Product" />
          </div>
          <h3>Amika</h3>
          <span className="price">&euro;12.658,45</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product1} alt="Product" />
          </div>
          <h3>Pariska noć</h3>
          <span className="price">&euro;102.973,20</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product2} alt="Product" />
          </div>
          <h3>Amika</h3>
          <span className="price">&euro;12.658,45</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product1} alt="Product" />
          </div>
          <h3>Pariska noć</h3>
          <span className="price">&euro;102.973,20</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product2} alt="Product" />
          </div>
          <h3>Amika</h3>
          <span className="price">&euro;12.658,45</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product1} alt="Product" />
          </div>
          <h3>Pariska noć</h3>
          <span className="price">&euro;102.973,20</span>
        </div>
        <div className="product">
          <div className="img-wrap">
            <img src={product2} alt="Product" />
          </div>
          <h3>Amika</h3>
          <span className="price">&euro;12.658,45</span>
        </div>
      </div>
      <div className="get-catalog">
        <h1>
          Preuzmite naš posljednji <br></br>katalog!
        </h1>
        <a href={sample} className="btn-red" target="_blank" rel="nopener">
          Prezmi katalog
        </a>
      </div>
      <div className="services">
        <div className="service">
          <img src={service1} alt="Service" />
          <h3>Isporuka</h3>
          <p>Brza isporuka i montaža na teritoriji Crne Gore</p>
        </div>
        <div className="service">
          <img src={service2} alt="Service" />
          <h3>Visoki kvalitet</h3>
          <p>
            Namještaj renomiranih proizvodjača iz Italije, Njemačke i Poljske
          </p>
        </div>
        <div className="service">
          <img src={service3} alt="Service" />
          <h3>Nagrade</h3>
          <p>
            Dobitnici prestižnih sertifikata za kvalitet i uspješno poslovanje
          </p>
        </div>
        <div className="service">
          <img src={service4} alt="Service" />
          <h3>Sigurnost</h3>
          <p>Već 23 godine gradimo povjerenje i omogućavamo sigurnu kupovinu</p>
        </div>
      </div>
      <div className="gallery">
        <h2>
          Naši <span>top</span> proizvodi
        </h2>
        <div className="img-wrap">
          <img src={gallery1} alt="Gallery image" />
        </div>
        <div className="img-wrap">
          <img src={gallery2} alt="Gallery image" />
        </div>
        <div className="img-wrap">
          <img src={gallery3} alt="Gallery image" />
        </div>
        <div className="img-wrap">
          <img src={gallery4} alt="Gallery image" />
        </div>
        <div className="img-wrap">
          <img src={gallery5} alt="Gallery image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
