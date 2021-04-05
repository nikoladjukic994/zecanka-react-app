import React, { useState, useEffect } from "react";
import "./about-us.scss";

function AboutUs() {
  return (
    <div>
      <div className="heading-small">
        <h2 data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
          O <span>nama</span>
        </h2>
      </div>
      <div className="about-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quaerat quibusdam sequi blanditiis omnis at nisi, velit, delectus
          beatae facilis possimus neque error sunt. Corrupti quibusdam ab
          corporis rem earum nobis culpa temporibus autem et, aliquid iusto
          veritatis ipsa reiciendis dolore nemo vitae sequi aspernatur suscipit
          exercitationem quasi optio perspiciatis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex magni
          dolorem molestias incidunt, ipsum error ipsam sapiente veniam facere
          esse.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quaerat quibusdam sequi blanditiis omnis at nisi, velit, delectus
          beatae facilis possimus neque error sunt. Corrupti quibusdam ab
          corporis rem earum nobis culpa temporibus autem et, aliquid iusto
          veritatis ipsa reiciendis dolore nemo vitae sequi aspernatur suscipit
          exercitationem quasi optio perspiciatis.
        </p>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=podgorica&t=&z=19&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://grantorrent-es.com">grantorrent</a>
          <br></br>
          <a href="https://www.embedgooglemap.net">website maps free</a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
