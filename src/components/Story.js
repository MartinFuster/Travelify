import React from "react";

function Story(props) {
  return (
    <div className="col-lg-12">
      <div className="story">
        <figure className="story__shape">
          <img
            src={props.image}
            alt="A person on an adventure"
            className="story__img"
          />
        </figure>
        <p className="story__caption">{props.name}</p>
        <div className="story__text">
          <h3
            className="heading-tertiary u-margin-bottom-small"
            data-aos="fade-up"
          >
            {props.title}
          </h3>
          <p data-aos="fade-up">{props.content} </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
