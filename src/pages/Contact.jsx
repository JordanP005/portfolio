import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { useTitle } from "../components/useTitle";
import { Link } from "react-router-dom";

function Contact() {
  useTitle("Contact");

  const [submitState, setSubmitState] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dzk54mn",
        "template_uidz90g",
        form.current,
        "XtPd7UMReDASo0AM2"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSubmitState(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar page={4} />
      {submitState ? (
        <div className="contact-done animate__animated animate__fadeInUp">
          <h1>Thanks For Reaching Out!</h1>
          <h2>I'll be in contact with you shortly</h2>
          <Link to="/">
            <div className="nav-contact animate__animated animate__fadeInUp animate__delay-1s">
              back to home
            </div>
          </Link>
        </div>
      ) : (
        <div className="contact-body">
          <div className="contact-text">
            <div className="contact-head">
              <h1>Lets Get In Contact</h1>
              <p>
                Feel free to ask any questions or tell me about a project in
                mind!
              </p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="name">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="message">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type your query or message here"
                rows="4"
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="submit-button"
              required
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
