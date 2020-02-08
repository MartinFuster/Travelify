import React from "react";

function H2Heading(props) {
  return (
    <div className={props.divClass} data-aos="fade-down">
      <h2 className={props.h2Class}>{props.text}</h2>
    </div>
  );
}

export default H2Heading;
