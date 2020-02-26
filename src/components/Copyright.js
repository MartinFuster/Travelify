import React from "react";
const year = new Date().getFullYear();

function Copyright(props) {
  return (
    <div
      className="copyright"
      data-aos="fade"
      data-aos-delay="200"
      data-aos-anchor-placement="bottom"
    >
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
