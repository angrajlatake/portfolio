import "./Footer.scss";

import React from "react";

const Footer = () => {
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
              <form className="footer__form">
                <div className="user-box">
                  <input className="footer__form-input" placeholder="Name" type="text" name="" required="" />
                </div>
                <div className="user-box">
                  <input className="footer__form-input" placeholder="Email" type="email" name="" required="" />
                </div>
                <div className="user-box">
                  <textarea className="footer__form-input" placeholder="Message" type="text" name="" required="" />
                </div>
                <a className="footer__form-btn">
                  Submit
                </a>
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
