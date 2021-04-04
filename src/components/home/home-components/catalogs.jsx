import React, { useState, useEffect } from "react";
import axios from "axios";

function Catalogs() {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/catalogs")
      .then((res) => {
        setCatalogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="get-catalog">
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          Preuzmite naš posljednji <br></br>katalog!
        </h1>
        {catalogs.map((catalog) => (
          <a
            href={process.env.PUBLIC_URL + catalog.document}
            className="btn-red"
            target="_blank"
            rel="nopener"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Prezmi katalog
          </a>
        ))}
      </div>
    </div>
  );
}

export default Catalogs;
