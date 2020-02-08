import React from "react";

function SubmitButton(props) {
  return (
    <div className="form__group">
      <input
        type="submit"
        className="btn btn--green"
        value={props.content}
        data-aos={props.dataAos}
      />
    </div>
  );
}

export default SubmitButton;
