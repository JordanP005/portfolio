import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-header animate__animated animate__backInUp">
          Jordan Padayachy
        </h1>
        <p className="hero-subheader  animate__animated animate__fadeInLeft animate__delay-1s">
          web developer
        </p>
      </div>
      <div className="hero-images">
        <img
          className="blob-2"
          src="assets\blob-1-opacity-61.gif"
          alt="blob1"
        />
        <img
          className="blob-1"
          src="assets\blob-1-opacity-100 (1).gif"
          alt="blob2"
        />
      </div>
      <img
        className="mouse-scroll animate__animated animate__fadeInUp animate__delay-3s"
        src="assets\output-onlinegiftools.gif"
        alt="mousescroll"
      />
    </section>
  );
}

export default Hero;
