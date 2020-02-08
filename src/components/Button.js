import React from "react";

function Button(props) {
  return (
    <a href={props.href} className={props.class} data-aos={props.dataAos}>
      {props.text}
    </a>
  );
}

export default Button;
