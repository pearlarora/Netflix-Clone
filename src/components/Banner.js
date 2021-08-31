import React from "react";
import "./css/Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <video className="background-video" autoPlay loop muted>
        <source src="bannerVideo.mp4" type="video/mp4" />
      </video>

      <div className="banner-contents">
        <h1 className="banner-title">Kissing Booth 3</h1>

        <div className="banner-desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quasi perspiciatis. Aliquid id, asperiores quae aspernatur modi exercitationem consectetur, excepturi debitis repudiandae sapiente fugiat enim.</p>
        </div>

        <div className="banner-buttons">
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
