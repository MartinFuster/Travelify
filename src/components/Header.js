import React from "react";
import Nav from "./Nav";
import logo from "../img/logo-white.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Nav
        firstItem="About"
        firstHref="#about"
        secondItem="Features"
        secondHref="#features"
        thirdItem="Tours"
        thirdHref="#tours"
        fourthItem="Testimonials"
        fourthHref="#testimonials"
        fifthItem="Newsletter"
        fifthHref="#newsletter"
      />
      <header className="header">
        <div className="header__logo-box" data-aos="fade-down">
          <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">Is where life happens</span>
          </h1>
          <Link to="/tours" className="btn btn--white btn--animated">
            Discover Our Tours
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
