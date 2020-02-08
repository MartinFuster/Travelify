import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import H2Heading from "./H2Heading";
import Input from "./Input";

function Buying() {
  return (
    <section className="buying">
      <Navbar />
      <div className="container">
        <form action="" className="form">
          <H2Heading
            divClass="u-margin-bottom-medium u-margin-top-medium  u-center-text"
            h2Class="heading-secondary"
            text="Bookings"
          />
          <div className="buying__group">
            <Input
              divClass="form__input"
              type="text"
              placeholder="First Name"
              id="name"
              labelClass="form__label"
            />
            <Input
              divClass="form__input"
              type="text"
              placeholder="Last Name"
              id="lastName"
              labelClass="form__label"
            />
          </div>
          <div className="buying__group">
            <Input
              divClass="form__input"
              type="text"
              placeholder="First Name"
              id="name"
              labelClass="form__label"
            />
            <Input
              divClass="form__input"
              type="text"
              placeholder="Last Name"
              id="lastName"
              labelClass="form__label"
            />
          </div>
          <div className="buying__group">
            <Input
              divClass="form__input"
              type="text"
              placeholder="First Name"
              id="name"
              labelClass="form__label"
            />
            <Input
              divClass="form__input"
              type="text"
              placeholder="Last Name"
              id="lastName"
              labelClass="form__label"
            />
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default Buying;
