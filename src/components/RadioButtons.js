import React from "react";

function RadioButtons(props) {
  return (
    <div className="form__group">
      <div className="form__radio-group">
        <input
          type="checkbox"
          className="form__radio-input"
          id="smallTours"
          name="size"
        />
        <label htmlFor="smallTours" className="form__radio-label">
          <span className="form__radio-button"></span>
          {props.firstRadio}
        </label>
      </div>
      <div className="form__radio-group">
        <input
          type="checkbox"
          className="form__radio-input"
          id="largeTours"
          name="size"
        />
        <label htmlFor="largeTours" className="form__radio-label">
          <span className="form__radio-button"></span>
          {props.secondRadio}
        </label>
      </div>
    </div>
  );
}

export default RadioButtons;
