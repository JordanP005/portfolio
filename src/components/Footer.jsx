import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  function on(id) {
    if (id === "instagram") {
      return "assets/instagram-blue.svg";
    } else if (id === "twitter") {
      return "assets/twitter-blue.svg";
    } else if (id === "github") {
      return "assets/github-blue.svg";
    }
  }

  function off(id) {
    if (id === "instagram") {
      return "assets/instagram-icon.svg";
    } else if (id === "twitter") {
      return "assets/twitter-icon.svg";
    } else if (id === "github") {
      return "assets/github-icon.svg";
    }
  }

  function mouseEnter(e) {
    const id = e.target.id;
    document.getElementById(id).src = on(id);
    document.getElementById(id).style.cursor = "pointer";
  }

  function mouseLeave(e) {
    const id = e.target.id;
    document.getElementById(id).src = off(id);
  }

  return (
    <div className="lone-footer">
      <ul>
        <Link to="/projects">
          <li>projects</li>
        </Link>
        <Link to="/services">
          <li>services</li>
        </Link>
        <Link to="/testimonials">
          <li>testimonials</li>
        </Link>
      </ul>
      <div className="lone-footer-buttons">
        <div className="lone-social-icons">
          <img
            id={"instagram"}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            src="assets/instagram-icon.svg"
            alt="instagram"
          />
          <img
            id={"twitter"}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            src="assets/twitter-icon.svg"
            alt="twitter"
          />
          <img
            id={"github"}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            src="assets/github-icon.svg"
            alt="facebook"
          />
        </div>
        <Link to="/contact">
          <div className="nav-contact">contact</div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
