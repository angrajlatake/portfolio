import "./Footer.scss";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wfkube7",
        "template_ijuzz82",
        form.current,
        "98PfKAdeyEcPsGOM_"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer" id="contact">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__about">
            <h3 className="footer__about-title">About</h3>
            <p className="footer__about-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              corporis adipisci ad pariatur aliquam laboriosam.
            </p>
          </div>
          <div className="footer__form-container">
            <h2>Login</h2>
            <form className="footer__form" ref={form} onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  className="footer__form-input"
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  required
                />
              </div>
              <div className="user-box">
                <input
                  className="footer__form-input"
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
              </div>
              <div className="user-box">
                <textarea
                  className="footer__form-input"
                  placeholder="Message"
                  type="text"
                  name="message"
                  required
                />
              </div>
              <button type="submit" className="footer__form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__banner">
        <h3>by Angraj Latake</h3>
      </div>
    </div>
  );
};

export default Footer;
