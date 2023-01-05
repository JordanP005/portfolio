import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTitle } from "../components/useTitle";

function ServicesPage() {
  useTitle("Services");

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
    <div className="servmain">
      <Navbar page={2} />
      <section className="servicepage">
        <div className="servtext">
          <h1>Services</h1>
          <p>
            I offer freelancing services to people and businesses, big or small.
            I am dedicated to providing the best quality services possible and
            work with the client to provide custom tailored websites. If you
            would like to work with me please contact me below
          </p>
          <Link to="/contact">
            <div className="nav-contact">contact me</div>
          </Link>
        </div>
        <div className="servbox">
          {" "}
          {services.map((service, key) => {
            return (
              <>
                <div className={"servblock"}>
                  <img src={service.image} alt={key} />
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
                <div className="border"></div>
              </>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ServicesPage;
