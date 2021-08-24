import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner" style= {{
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}>
      <video className="background-video" autoPlay loop muted>
        <source src="bannerVideo.mp4" type="video/mp4" />
      </video>
      <div className="banner-contents">
        <h1 className="banner-title">Kissing Booth 3</h1>
      </div>
    </header>
  );
}

export default Banner;
