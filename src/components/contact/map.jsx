import React, { useState, useRef, useEffect } from "react";

function Map() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="100%"
          height="450"
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
  );
}

export default Map;
