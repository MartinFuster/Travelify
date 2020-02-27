import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <section className="contact">
      <div className="content">
        <Navbar />
        <div className="container" data-aos="fade">
          <h1 className="heading-secondary u-center-text u-margin-top-big u-margin-bottom-small">
            Contact
          </h1>
          <p className="paragraph">
            Feel free to contact us, well help you as fast as possible
          </p>
          <ul className="conditions-list">
            <li className="paragraph">
              You can contact our <strong>customer service</strong> team at
              <i> travelifyexperience@travelify.com</i>
            </li>

            <li className="paragraph">
              You can contact our <strong>bookings </strong> team at
              <i> travelifybookings@travelify.com</i>
            </li>
            <li className="paragraph u-margin-bottom-fill">
              You can contact our <strong>HR</strong> team at
              <i> travelifyhr@travelify.com</i>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
