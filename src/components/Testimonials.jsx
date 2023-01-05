import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonails-container">
        <h1>Testimonials</h1>
        <Carousel />
      </div>
      <Link to="/testimonials">
        <div className="view-button">view all</div>
      </Link>
    </section>
  );
}

export default Testimonials;
