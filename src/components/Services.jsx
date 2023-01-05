import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      image: "assets/code-icon.svg",
      title: "Web Development",
      description:
        "I develop responsive and optimized websites based on the clients needs",
    },
    {
      image: "assets/design-icon.svg",
      title: "Web Design",
      description:
        "I design websites to be fresh and modern with their own unique look",
    },
    {
      image: "assets/search-icon.svg",
      title: "SEO Optimization",
      description:
        "I optimize websites so that they rank higher on google searches",
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <p>what I can do for you</p>
        <h1>Services</h1>
      </div>
      <div className={"services-container"}>
        {services.map((service, key) => {
          return (
            <div className={"service-block"}>
              <img src={service.image} alt={key} />
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
      <Link to="/services">
        <div className={"view-button"}>learn more</div>
      </Link>
    </section>
  );
}

export default Services;
