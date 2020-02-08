import React from "react";
import Input from "./Input";
import H2Heading from "./H2Heading";
import SubmitButton from "./SubmitButton";

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("You have successfully signed up to our newsletter!.");
  }
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <H2Heading
        divClass="u-margin-bottom-medium"
        h2Class="heading-secondary"
        text="Join our Newsletter"
      />

      <Input
        divClass="form__group"
        type="text"
        placeholder="Full Name"
        id="name"
        labelClass="form__label"
        dataAos="zoom-out-up"
      />
      <Input
        divClass="form__group"
        type="email"
        placeholder="Email adress"
        id="email"
        labelClass="form__label"
        dataAos="zoom-out-up"
      />

      <label
        className="checkbox-container"
        htmlFor="conditions"
        data-aos="zoom-in"
      >
        <span className="form__span">
          I agree with the terms and conditions.
        </span>
        <input type="checkbox" required id="conditions" />
        <span className="checkmark"></span>
      </label>
      <SubmitButton content="Submit" dataAos="zoom-in-up" />
    </form>
  );
}

export default Form;
