import React from "react";
import Footer from "../components/Footer";
import { useTitle } from "../components/useTitle";
import Navbar from "../components/Navbar";

function TestimonialsPage() {
  useTitle("Testimonials");

  return (
    <div>
      <Navbar page={1} />
      <section className="test-page">
        <h1>Testimonials</h1>
        <div className="test-container">
          <div className="test-block">
            <div className="profile">
              <img src="assets/profile-icon.svg" alt="profile" />
              Daniel - Pollerade
            </div>
            <p>
              Jordan was tasked with creating a website for Pollerade and was
              able to do so quickly and efficiently.He prioritized the project
              which allowed them to shift their focus towards fast and clear
              communication. Throughout the entire process Jordan always made
              sure to notify us of any issues or complications that they ran
              into which were all fixed in the end. Jordan was very professional
              all the way through and was pleasantly cooperative when we
              required any changes to be made to the website. In the end, we at
              Pollerade are very pleased with the final result and will hope to
              continue to have contact with Jordan for any future projects.
            </p>
          </div>
          <div className="test-block">
            <div className="profile">
              <img src="assets/profile-icon.svg" alt="profile" />
              Vihaan Dutta
            </div>
            <p>
              Jordan created a marvelous application when prompted, and was
              always online when I needed assistance. If you want an application
              made to your personal preference, Jordan will be able to meet your
              satisfaction!
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default TestimonialsPage;
