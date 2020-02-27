import React from "react";
import NotFoundImg from "../img/page-not-found.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function NotFound() {
  return (
    <div className="no-match">
      <div className="content">
        <Navbar />
        <div className="container" data-aos="fade">
          <div className="error__container">
            <div className="error__content">
              <h1 className="big-text">¡Whoops!</h1>
              <h2 className="text">
                We didnt find the page you are looking for
              </h2>
            </div>
            <div className="error__image-container">
              <img src={NotFoundImg} alt="Not found" className="error__image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
