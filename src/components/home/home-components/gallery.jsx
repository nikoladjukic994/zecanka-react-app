import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/gallery")
      .then((res) => {
        setGalleryImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="gallery">
        <h2 data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
          Mjesta sa našim <span>namještajem</span>
        </h2>
        <div className="gallery-images">
          {galleryImages.map((gallery, idx) => (
            <div
              className="img-wrap"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-once="true"
              key={idx}
            >
              <img
                src={process.env.PUBLIC_URL + gallery.image}
                alt="Gallery image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
