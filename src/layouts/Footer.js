import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="social-icons">
            <a
              href="https://twitter.com/heraldofortuna"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://github.com/heraldofortuna"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/heraldo-fortuna/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
          <p>Design by Heraldo Fortuna - Copyright 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
