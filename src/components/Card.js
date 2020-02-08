import React from "react";

function Card(props) {
  return (
    <div className="col-lg-3 col-md-12 col-sm-12">
      <div className="feature-box" data-aos="fade-up">
        <i className={props.imageClasses}></i>
        <h3 className="heading-tertiary u-margin-bottom-small feature-box__title">
          {props.headingText}
        </h3>
        <p className="feature-box__text">{props.paragraphText}</p>
      </div>
    </div>
  );
}
export default Card;
