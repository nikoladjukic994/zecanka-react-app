import React, { useState, useEffect } from "react";
import "./furniture.scss";
import axios from "axios";

import { FaTable, FaList } from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Furniture() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [gridList, setGridList] = useState("grid");

  useEffect(() => {
    axios
      .get("http://localhost:3001/all_products")
      .then((res) => {
        setAllProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterProducts = (search) => {
    setFilteredProducts(
      allProducts.filter((products) =>
        products.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    console.log(filterProducts.length);
  };

  return (
    <div>
      <div className="top-products all-products">
        <h2 data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
          Svi naši <span>proizvodi</span>
        </h2>
        <div className="choose-view-wrap">
          <input
            type="text"
            placeholder="Pretraži po nazivu"
            onChange={(e) => filterProducts(e.target.value)}
          />
          <div className="choose-view">
            <h3>Odaberi način prikaza: </h3>
            <FaTable
              className={gridList == "grid" ? "active" : ""}
              onClick={() => setGridList("grid")}
            ></FaTable>
            <FaList
              className={gridList == "list" ? "active" : ""}
              onClick={() => setGridList("list")}
            ></FaList>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div
            className={gridList == "grid" ? "products-row" : "products-list"}
          >
            {filteredProducts.map((product) => (
              <NavLink
                to={{
                  pathname: `/furniture-single-${product.id}`
                }}
                className="product"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="img-wrap">
                  <img
                    src={process.env.PUBLIC_URL + product.image}
                    alt={product.title}
                  />
                </div>
                <div>
                  <h3>{product.title}</h3>
                  <span className="price">&euro;{product.price}</span>
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <h1 className="no-results">Nema rezultata za unijeti pojam</h1>
        )}
      </div>
    </div>
  );
}

export default Furniture;
