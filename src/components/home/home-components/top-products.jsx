import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function TopProducts() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/top_products")
      .then((res) => {
        setTopProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="top-products">
        <h2 data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
          Naši <span>top</span> proizvodi
        </h2>
        <div className="products-row">
          {topProducts.map((product, idx) => (
            <NavLink
              to={{
                pathname: `/furniture-single-${product.id}`,
              }}
              className="product"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              key={idx}
            >
              <div className="img-wrap">
                <img
                  src={process.env.PUBLIC_URL + product.image}
                  alt={product.title}
                />
              </div>
              <h3>{product.title}</h3>
              <span className="price">&euro;{product.price}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
