import React from "react";

function Input(props) {
  return (
    <div className={props.divClass}>
      <input
        type={props.type}
        className="form__input"
        placeholder={props.placeholder}
        required
        id={props.id}
        autoComplete="off"
        data-aos={props.dataAos}
      />
      <label htmlFor={props.id} className={props.labelClass}>
        {props.placeholder}
      </label>
    </div>
  );
}

export default Input;
