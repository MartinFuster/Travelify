import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Carrers() {
  return (
    <section className="carrers">
      <Navbar />
      <div className="container">
        <h1
          className="heading-secondary u-center-text u-margin-top-big u-margin-bottom-small"
          data-aos="zoom"
        >
          Careers
        </h1>
        <p className="paragraph" data-aos="fade">
          Thank you for taking an interest in working with us!
        </p>
        <p className="paragraph" data-aos="fade">
          Currently we have 2 positions open:
        </p>
        <ul className="conditions-list">
          <li className="paragraph" data-aos="fade">
            Tour Guide
          </li>
          <li className="paragraph u-margin-bottom-medium" data-aos="fade">
            Travel Agent
          </li>
        </ul>
        <p className="paragraph u-margin-bottom-fill" data-aos="fade">
          Please send your cv to travelifyjobs@travelify.com and specify your
          position in the email subject, we hope to hear from you soon!
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Carrers;
