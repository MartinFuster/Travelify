import React from "react";

function Input(props) {
  return (
    <div className={props.divClass} data-aos={props.dataAos}>
      <input
        type={props.type}
        className="form__input"
        placeholder={props.placeholder}
        required
        id={props.id}
        autoComplete="off"
      />
      <label htmlFor={props.id} className={props.labelClass}>
        {props.placeholder}
      </label>
    </div>
  );
}

export default Input;
