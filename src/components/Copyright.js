import React from "react";
const year = new Date().getFullYear();

function Copyright(props) {
  return (
    <div className="copyright">
      <p className="copyright__text">
        <span role="img" aria-label="copyright">
          ©️
        </span>{" "}
        {year} {props.content}
      </p>
    </div>
  );
}

export default Copyright;
