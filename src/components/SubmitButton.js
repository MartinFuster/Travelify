import React from "react";

function SubmitButton(props) {
  return (
    <div className="form__group" data-aos={props.dataAos}>
      <input type="submit" className="btn btn--green" value={props.content} />
    </div>
  );
}

export default SubmitButton;
