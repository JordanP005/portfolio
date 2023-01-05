import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Aboutme from "../components/Aboutme";

function Home() {
  return (
    <div>
      <Navbar page={0} />
      <Hero />
      <Featured />
      <Services />
      <Testimonials />
      <Aboutme />
    </div>
  );
}

export default Home;
