import React from "react";
import img1 from "../img/nat-8.jpg";
import img2 from "../img/nat-9.jpg";
import H2Heading from "./H2Heading";
import Button from "./Button";

function Popup() {
  function handleClick(event) {
    const exit = document.getElementsByClassName("popup__close")[0];
    const eventCallerName = event.target.className;

    if (eventCallerName === "popup") {
      exit.click();
    }
  }

  return (
    <div className="popup" id="popup" onClick={handleClick}>
      <div className="container">
        <div className="popup__content">
          <div className="popup__left">
            <img src={img1} alt="A woman on a kayak" className="popup__img" />
            <img src={img2} alt="A man in a mountain" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <H2Heading
              h2Class="heading-secondary"
              divClass="u-margin-bottom-small"
              text="Book now"
            />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please, read the terms and conditions.
            </h3>
            <p className="popup__text">
              Welcome to Travelify! These terms and conditions outline the rules
              and regulations for the use of Travelify's Website, located at
              travelify.com. By accessing this website we assume you accept
              these terms and conditions. Do not continue to use Travelify if
              you do not agree to take all of the terms and conditions stated on
              this page. The following terminology applies to these Terms and
              Conditions, Privacy Statement and Disclaimer Notice and all
              Agreements: “Client”, “You” and “Your” refers to you, the person
              log on this website and compliant to the Company's terms and
              conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”,
              refers to our Company. “Party”, “Parties”, or “Us”, refers to both
              the Client and ourselves.
            </p>
            <Button href="#" class="btn btn--green" text="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
