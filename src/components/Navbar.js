import React from "react";
import logo from "../img/logo-white.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar__logo-box">
            <Link to="/">
              <img src={logo} alt="logo" className="header__logo" />
            </Link>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto custom-toggler">
            <li className="nav-item">
              <a className="nav-link" href="mailto:martinfuster3@gmail.com">
                <i className="far fa-envelope"></i>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/mrtinfuster/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
