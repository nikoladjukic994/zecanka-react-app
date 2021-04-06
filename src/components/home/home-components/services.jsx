import React, { useState, useEffect } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="services">
        {services.map((service, idx) => (
          <div
            className="service"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-once="true"
            key={idx}
          >
            <div className="img-wrap">
              <img
                src={process.env.PUBLIC_URL + service.image}
                alt={service.title}
              />
            </div>
            <span className="service-title">{service.title}</span>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
