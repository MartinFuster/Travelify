import React from "react";
import logo from "../img/logo-white.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div class="navbar-brand">
          <div className="navbar__logo-box">
            <Link to="/">
              <img src={logo} alt="logo" className="header__logo" />
            </Link>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto custom-toggler">
            <li class="nav-item">
              <a class="nav-link" href="mailto:martinfuster3@gmail.com">
                <i class="far fa-envelope"></i>
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/mrtinfuster/"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
