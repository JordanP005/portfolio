import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [homeState, setHomeState] = React.useState(true);
  const [burgerState, setBurgerState] = React.useState(false);

  React.useEffect(() => {
    // Update the document title using the browser API

    if (props.page > 0) {
      setHomeState(false);
    } else {
      setHomeState(true);
    }
  }, [props.page]);

  function burger() {
    setBurgerState((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <nav>
      {window.innerWidth >= 600 ? (
        <div className="nav-links">
          <Link to="/testimonials">
            {" "}
            <p id="Testimonials">testimonials</p>
          </Link>
          <Link to="/services">
            {" "}
            <p id="Services">services</p>
          </Link>
          <Link to="/projects">
            {" "}
            <p id="Projects">projects</p>
          </Link>

          <Link to="/">{homeState ? null : <p>home</p>}</Link>
        </div>
      ) : (
        <img onClick={burger} src="assets/icon-hamburger.svg" alt="" />
      )}
      {burgerState ? (
        <div
          onClick={burger}
          className="burgermodal animate__animated animate__slideInLeft"
        >
          <img src="assets/icon-close.svg" alt="" />{" "}
          <Link to="/testimonials">
            {" "}
            <p id="Testimonials">testimonials</p>
          </Link>
          <Link to="/services">
            {" "}
            <p id="Services">services</p>
          </Link>
          <Link to="/projects">
            {" "}
            <p id="Projects">projects</p>
          </Link>
          <Link to="/">{homeState ? null : <p>home</p>}</Link>
        </div>
      ) : null}
      {props.page === 4 ? null : (
        <Link to="/contact">
          <div className="nav-contact">contact</div>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
