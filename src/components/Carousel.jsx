import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonails = [
  {
    text: "Jordan was tasked with creating a website for Pollerade and was able to do so quickly and efficiently.He prioritized the project which allowed them to shift their focus towards fast and clear communication. Throughout the entire process Jordan always made sure to notify us of any issues or complications that they ran into which were all fixed in the end. Jordan was very professional all the way through and was pleasantly cooperative when we required any changes to be made to the website. In the end, we at Pollerade are very pleased with the final result and will hope to continue to have contact with Jordan for any future projects.",
    user: "Daniel - Pollerade",
  },
  {
    text: "Jordan created a marvelous application when prompted, and was always online when I needed assistance. If you want an application made to your personal preference, Jordan will be able to meet your satisfaction!",
    user: "Vihaan Dutta",
  },
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {testimonails.map((testimonail, key) => {
            return (
              <div className="slider-container">
                <div className="slider-block">
                  <p>
                    <span style={{ color: "#00a8cc", fontSize: "2rem" }}>
                      "{" "}
                    </span>
                    {testimonail.text}
                    <span style={{ color: "#00a8cc", fontSize: "2rem" }}>
                      {" "}
                      "
                    </span>
                  </p>
                  <h2>{testimonail.user}</h2>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
