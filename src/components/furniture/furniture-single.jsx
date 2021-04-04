import React, { useState, useEffect } from "react";
import "./furniture.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const FurnitureSingle = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/all_products/" + id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="top-products all-products">
        <h2 data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
          Više <span>detalja</span> o proizvodu
        </h2>
        <div className="products-list">
          <div
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureSingle;
